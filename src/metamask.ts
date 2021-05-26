import type { Ethereum, Account } from './types/Ethereum';

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
