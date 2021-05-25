import { configureStore } from '@reduxjs/toolkit';
import { useSelector as _useSelector, useDispatch as _useDispatch } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';
import type { Reducer } from 'redux';

export type MetamaskState = { tag: 'Connect' }
                          | { tag: 'Loading' }
                          | { tag: 'Error'; message: string }
                          | { tag: 'Connected'; account: string }
                          ;

type Action = { type: 'metamask', metamask: MetamaskState }
            ;

type State = { metamask: MetamaskState };

const initialState: State = {metamask: {tag: 'Connect'}};

const update: Reducer<State, Action> = (state = initialState, action) => {
    switch (action.type) {
        case 'metamask': return { metamask: action.metamask };
        default: return state;
    }
};

export function useSelector<T>(map: (state: State) => T): T {
    return _useSelector(map);
}

export type AsyncAction<T> = ThunkAction<T, State, unknown, Action>;

export const createStore = () => configureStore({reducer: update});

export const useDispatch = (() => {
    const store = createStore();
    type TDispatch = typeof store.dispatch;
    return () => _useDispatch<TDispatch>();
})();