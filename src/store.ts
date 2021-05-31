import { configureStore  } from '@reduxjs/toolkit';
import { useDispatch as internal_useDispatch, useSelector as internal_useSelector } from 'react-redux';
import reducer from './reducer';
import walletMiddleware from './walletMiddleware';

/// For type inference
const getDispatch = () => createStore().dispatch;
const getState = () => createStore().getState();

export type Dispatch = ReturnType<typeof getDispatch>;
export type State = ReturnType<typeof getState>;
export type Store = ReturnType<typeof createStore>;

export function createStore() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(walletMiddleware)
    });
}

export const useDispatch = () => internal_useDispatch<Dispatch>();
export const useSelector: <T>(select: (state: State) => T) => T = (select) => internal_useSelector(select);
export const useWallet = () => useSelector(state => state);