import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from '../slices/metamask';
import useDispatch from '../hooks/useDispatch';
import useMetamask from '../hooks/useMetamask';
import translate from '../networks';

function Metamask() {
    const state = useMetamask();
    const dispatch = useDispatch();

    if (state.tag === 'Disconnected') {
        return <Button fullWidth onClick={() => dispatch(connect())} variant="outlined" color="primary">Connect to Metamask</Button>;
    } else if (state.tag === 'Connecting') {
        return <Button fullWidth variant="outlined" color="primary">Loading...</Button>;
    } else if (state.tag === 'Error') {
        return <Button fullWidth variant="outlined" color="secondary">Error: {state.message}</Button>;
    } else {
        return <Button fullWidth variant="outlined" color="primary">account: {state.account}<br />chain: {translate(state.chainId)}</Button>;
    }
}

export default Metamask;