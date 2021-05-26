export type Account = string;

type ChainChanged = (event: 'chainChanged', handler: (chainId: string) => void) => void;
type AccountsChanged = (event: 'accountsChanged', handler: (accounts: Account[]) => void) => void;

export interface Ethereum {
    isMetaMask: boolean;
    isConnected: () => boolean;
    request: (_: {method: 'eth_requestAccounts'}) => Promise<Account[]>;
    on: ChainChanged | AccountsChanged;
}