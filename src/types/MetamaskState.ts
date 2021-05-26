export type MetamaskState = { tag: 'Connect' }
                          | { tag: 'Loading' }
                          | { tag: 'Error'; message: string }
                          | { tag: 'Connected'; account: string }
                          ;

export default MetamaskState;