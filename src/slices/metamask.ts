import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import Ethereum from '../types/Ethereum';
import * as MetamaskState from '../types/MetamaskState';

function getProvider(): Ethereum {
    const global: {window?: Window & {ethereum?: Ethereum}} = globalThis;
    if (global.window && global.window.ethereum && global.window.ethereum.isMetaMask) {
        return global.window.ethereum;
    } else {
        throw new Error('Metamask is not installed');
    }
}

export const connect = createAsyncThunk('metamask/connect', async () => {
    const eth = getProvider();
    const accounts = await eth.request({method: 'eth_requestAccounts'});
    const account = accounts[0];
    const chainId = await eth.request({method: 'eth_chainId'});
    return {account, chainId};
});

export function subscribe<Store extends {dispatch: (action: AnyAction) => any}>(store: Store) {
    const eth = getProvider();
    eth.on('chainChanged', (chainId) => store.dispatch(chainChanged(chainId)));
    eth.on('accountsChanged', (accounts) => store.dispatch(accountsChanged(accounts)));
    eth.on('disconnect', (error) => store.dispatch(disconnect()));
}

const metamask = createSlice({
    name: 'metamask',
    initialState: {tag: 'Disconnected'} as MetamaskState.MetamaskState,
    reducers: {
        disconnect: (state, action: PayloadAction<void>) => ({tag: 'Disconnected'}),
        chainChanged: (state, action: PayloadAction<string>) => {
            const chainId = action.payload;
            if (state.tag === 'Connected') return {...state, chainId};
            return state;
        },
        accountsChanged: (state, action: PayloadAction<string[]>) => {
            const accounts = action.payload;
            if (!accounts || accounts.length === 0) return {tag: 'Disconnected'};
            const account = accounts[0];
            if (state.tag === 'Connected') return {...state, account};
            return state;
        }
    },
    extraReducers: builder => {
        builder.addCase(connect.fulfilled, (_, action) => ({...action.payload, tag: 'Connected'}));
        builder.addCase(connect.pending, (_, action) => ({tag: 'Connecting'}));
        builder.addCase(connect.rejected, (_, action) => ({tag: 'Error', message: action.error.message || ""}));
    }
});

export const { disconnect, chainChanged, accountsChanged } = metamask.actions;
export const reducer = metamask.reducer;