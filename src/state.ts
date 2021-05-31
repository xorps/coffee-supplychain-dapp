type State 
    = {state: 'Offline'}
    | {state: 'WalletConnecting'}
    | {state: 'WalletConnectionFailed', error: string}
    | {state: 'WalletConnected', network: string; account: string}
    ;

type ReadonlyState = Readonly<State>;

export default ReadonlyState;
