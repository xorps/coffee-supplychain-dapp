import { Reducer } from '@reduxjs/toolkit';
import State from './state';
import { UpdateAccount, UpdateNetwork, Disconnect, ConnectWalletPending, ConnectWalletLoaded, ConnectWalletRejection } from './actions';

const initialState: State = {state: 'Offline'};

const reducer: Reducer<State> = (state = initialState, action) => {
    if (ConnectWalletPending.match(action)) return {state: 'WalletConnecting'};
    else if (ConnectWalletLoaded.match(action)) return {...action.payload, state: 'WalletConnected'};
    else if (ConnectWalletRejection.match(action)) return {state: 'WalletConnectionFailed', error: action.payload};
    else if (UpdateAccount.match(action) && state.state === 'WalletConnected') {
        const account = action.payload;
        return {...state, account};
    }
    else if (UpdateNetwork.match(action) && state.state === 'WalletConnected') {
        const network = action.payload;
        return {...state, network};
    }
    else if (Disconnect.match(action)) return {state: 'Offline'};
    else return state;
};

export default reducer;