import { AsyncAction, MetamaskState } from './store';

interface Ethereum {
    isMetaMask: boolean;
    isConnected: () => boolean;
    request: (_: {method: 'eth_requestAccounts'}) => Promise<string[]>;
}

async function connect(): Promise<MetamaskState> {
    const win: Window & {ethereum?: Ethereum} = window;
    if (!win.ethereum || !win.ethereum.isMetaMask) {
        return {tag: 'Error', message: 'Metamask not installed'};
    }
    const accounts = await win.ethereum.request({method: 'eth_requestAccounts'});
    return {tag: 'Connected', account: accounts[0]};
}

export const connectMetamask: () => AsyncAction<Promise<void>> = () => async (dispatch, getState) => {
    try {
        dispatch({type: 'metamask', metamask: {tag: 'Loading'}});
        const state = await connect();
        dispatch({type: 'metamask', metamask: state});
    } catch (err) {
        dispatch({type: 'metamask', metamask: {tag: 'Error', message: `${err}`}});
    }
};