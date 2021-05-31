type State = 
    Readonly< {state: 'Offline'}
            | {state: 'WalletConnecting'}
            | {state: 'WalletConnectionFailed', error: string}
            | {state: 'WalletConnected', contractAddress: string; network: string; account: string}
            >;

export default State;