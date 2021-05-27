import { Ethereum, Account } from './types/Ethereum';
import Store from './types/Store';

export async function connect(): Promise<Account[]> {
    const eth: Ethereum = (() => {
        const global: {window?: Window & {ethereum?: Ethereum}} = globalThis;
        if (global.window && global.window.ethereum && global.window.ethereum.isMetaMask) {
            return global.window.ethereum;
        } else {
            throw new Error('Metamask is not installed');
        }
    })();
    const accounts = await eth.request({method: 'eth_requestAccounts'});
    return accounts;
}

export function subscribe(eth: Ethereum, store: Store) {
    eth.on('chainChanged', (chainId) => {});
}