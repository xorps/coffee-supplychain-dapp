import { createSlice } from '@reduxjs/toolkit';
import connectMetamask from '../actions/connectMetamask';
import type MetamaskState from '../types/MetamaskState';

const initialState = ({tag: 'Connect'}) as MetamaskState;

const metamask = createSlice({
    name: 'metamask',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(connectMetamask.fulfilled, (_, action) => ({tag: 'Connected', account: action.payload[0]}));
        builder.addCase(connectMetamask.pending, (_, action) => ({tag: 'Loading'}));
        builder.addCase(connectMetamask.rejected, (_, action) => ({tag: 'Error', message: action.error.message || ""}));
    }
});

export default metamask;