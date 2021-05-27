import React from 'react';
import Button from '@material-ui/core/Button';
import useDispatch from '../hooks/useDispatch';
import useMetamask from '../hooks/useMetamask';
import connectMetamask from '../actions/connectMetamask';

function Metamask() {
    const state = useMetamask();
    const dispatch = useDispatch();

    if (state.tag === "Connect") {
        return <Button fullWidth onClick={() => dispatch(connectMetamask())} variant="outlined" color="primary">Connect to Metamask</Button>;
    } else if (state.tag === "Loading") {
        return <Button fullWidth variant="outlined" color="primary">Loading...</Button>;
    } else if (state.tag === "Error") {
        return <Button fullWidth variant="outlined" color="secondary">Error: {state.message}</Button>;
    } else {
        return <Button fullWidth variant="outlined" color="primary">{state.account}</Button>;
    }
}

export default Metamask;