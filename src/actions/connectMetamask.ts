import AsyncAction from '../types/AsyncAction';
import * as metamask from '../metamask';

const connectMetamask: () => AsyncAction<Promise<void>> = () => async (dispatch, getState) => {
    try {
        dispatch({type: 'metamask', metamask: {tag: 'Loading'}});
        const accounts = await metamask.connect();
        dispatch({type: 'metamask', metamask: {tag: 'Connected', account: accounts[0]}});
    } catch (err) {
        dispatch({type: 'metamask', metamask: {tag: 'Error', message: `${err}`}});
    }
};

export default connectMetamask;