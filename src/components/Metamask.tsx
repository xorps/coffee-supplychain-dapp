import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from '../store';
import { connectMetamask } from '../metamask';

function Metamask() {
    const state = useSelector(state => state.metamask);
    const dispatch = useDispatch();

    if (state.tag === "Connect") {
        return <Button onClick={() => dispatch(connectMetamask())} variant="outlined" color="primary">Connect to Metamask</Button>;
    } else if (state.tag === "Loading") {
        return <Button variant="outlined" color="primary">Loading...</Button>;
    } else if (state.tag === "Error") {
        return <Button variant="outlined" color="secondary">Error: {state.message}</Button>;
    } else {
        return <Button variant="outlined" color="primary">{state.account}</Button>;
    }
}

export default Metamask;