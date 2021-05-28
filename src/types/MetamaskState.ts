export type Disconnected = {tag: 'Disconnected'};
export type Connecting = {tag: 'Connecting'};
export type Error = {tag: 'Error'; message: string};
export type Connected = {tag: 'Connected'; account: string; chainId: string};
export type MetamaskState = Disconnected | Connecting | Error | Connected;

export default MetamaskState;