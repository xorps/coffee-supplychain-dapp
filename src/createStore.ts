import { configureStore } from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import State from './types/State';
import Action from './types/Action';

const initialState: State = {metamask: {tag: 'Connect'}};

const reducer: Reducer<State, Action> = (state = initialState, action) => {
    switch (action.type) {
        case 'metamask': return { metamask: action.metamask };
        default: return state;
    }
};

export default function () {
    return configureStore({reducer});
}