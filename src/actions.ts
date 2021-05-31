import { createAction } from '@reduxjs/toolkit';

export const Disconnect = createAction('wallet/disconnect');
export const UpdateAccount = createAction<string>('wallet/changeaccount');
export const UpdateNetwork = createAction<string>('wallet/changechain');
export const ConnectWallet = createAction('wallet/connect/start');
export const ConnectWalletPending = createAction('wallet/connect/pending');
export const ConnectWalletLoaded = createAction<{contractAddress: string; network: string; account: string}>('wallet/connect/loaded');
export const ConnectWalletRejection = createAction<string>('wallet/connect/rejection');