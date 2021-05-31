import { Dispatch, Middleware, AnyAction } from '@reduxjs/toolkit';
import State from './state';
import { Disconnect, UpdateNetwork, UpdateAccount, ConnectWallet, ConnectWalletPending, ConnectWalletRejection, ConnectWalletLoaded } from './actions';
import Ethereum from './Ethereum';

// https://docs.metamask.io/guide/ethereum-provider.html#chain-ids
const networks: Map<string, string> = new Map([
    ['0x1', 'Ethereum Main Network (Mainnet)'],
    ['0x3', 'Ropsten Test Network'],
    ['0x4', 'Rinkeby Test Network'],
    ['0x5', 'Goerli Test Network'],
    ['0x2a', 'Kovan Test Network']
]);

function translateNetwork(chainId: string): string {
    return networks.get(chainId) || chainId;
}

function translateError(err: any): string {
    if ('message' in err) {
        return err.message;
    }
    return String(err);
}

function getProvider(): Ethereum | undefined {
    const global: {window?: Window & {ethereum?: Ethereum}} = globalThis;
    if (global.window && global.window.ethereum && global.window.ethereum.isMetaMask) {
        return global.window.ethereum;
    }
    return undefined;
}

function subscribe(eth: Ethereum, dispatch: Dispatch<AnyAction>) {
    eth.on('chainChanged', (chainId) => dispatch(UpdateNetwork(translateNetwork(chainId))));
    eth.on('accountsChanged', (accounts) => {
        const account = accounts[0];
        // Metamask will send an empty string on disconnect
        if (account) dispatch(UpdateAccount(account));
        else dispatch(Disconnect());
    });
    eth.on('disconnect', (err) => dispatch(Disconnect()));
}

async function connect(dispatch: Dispatch<AnyAction>) {
    try {
        dispatch(ConnectWalletPending());
        dispatch(ConnectWalletLoaded(await (async () => {
            const eth = getProvider();
            if (!eth) {
                throw new Error('Provider not detected');
            }
            subscribe(eth, dispatch);
            const accounts = await eth.request({method: 'eth_requestAccounts'});
            const account = accounts[0];
            const chainId = await eth.request({method: 'eth_chainId'});
            return {account, network: translateNetwork(chainId)};
        })()));
    } catch (err) {
        dispatch(ConnectWalletRejection(translateError(err)));
    }
}

const delay = (ms: number) => new Promise((resolve, reject) => setTimeout(resolve, ms));

const wallet: Middleware<{}, State> = ({dispatch, getState}) => next => {

    function onAction(action: AnyAction): any {
        if (ConnectWallet.match(action)) return connect(dispatch);
        return next(action);
    }

    return onAction;
};

export default wallet;
