export type Account = string;

export interface Ethereum {
    isMetaMask: boolean;
    isConnected(): boolean;
    request(_: {method: 'eth_requestAccounts'}): Promise<Account[]>;
    on(event: 'chainChanged', handler: (chainId: string) => void): void;
    on(event: 'accountsChanged', handler: (accounts: Account[]) => void): void;
}