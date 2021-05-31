interface ConnectInfo {
    readonly chainId: string;
}

interface ProviderRpcError extends Error {
    message: string;
    code: number;
    data?: unknown;
}

// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md
interface Ethereum {
    isMetaMask: boolean;
    isConnected(): boolean;
    request(_: {method: 'eth_requestAccounts'}): Promise<string[]>;
    request(_: {method: 'eth_accounts'}): Promise<string[]>;
    request(_: {method: 'eth_chainId'}): Promise<string>;
    // @deprecated
    // for web3
    sendAsync(payload: unknown, callback: unknown): void;
    on(event: 'chainChanged', handler: (chainId: string) => void): void;
    on(event: 'accountsChanged', handler: (accounts: string[]) => void): void;
    on(event: 'connect', handler: (info: ConnectInfo) => void): void;
    on(event: 'disconnect', handler: (error: ProviderRpcError) => void): void;
    removeListener(event: string, handler: unknown): void;
}

export default Ethereum;