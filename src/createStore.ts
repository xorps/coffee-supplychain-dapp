import { configureStore } from '@reduxjs/toolkit';
import { reducer as metamask } from './slices/metamask';

const createStore = () => configureStore({
    reducer: {metamask}
});

export default createStore;