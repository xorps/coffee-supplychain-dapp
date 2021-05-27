import { configureStore } from '@reduxjs/toolkit';
import metamask from './reducers/metamask';

const createStore = () => configureStore({
    reducer: {metamask}
});

export default createStore;