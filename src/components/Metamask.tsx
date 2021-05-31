import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useDispatch, useWallet } from '../store';
import { ConnectWallet } from '../actions';

function Metamask() {
    const state = useWallet();
    const dispatch = useDispatch();
    const onClick = () => dispatch(ConnectWallet());

    if (state.state === 'Offline') {
        return <Button fullWidth onClick={onClick} variant="outlined" color="primary">Connect to Metamask</Button>;
    } else if (state.state === 'WalletConnecting') {
        return <>
            <Box display="flex" alignItems="center" justifyContent="center">Loading Wallet...</Box>
            <Box display="flex" alignItems="center" justifyContent="center"><LinearProgress style={{width: '100%'}}/></Box>
        </>;
    } else if (state.state === 'WalletConnectionFailed') {
        return <Button fullWidth onClick={onClick} variant="outlined" color="secondary">Error: {state.error}</Button>;
    } else {
        const {network, account} = state;
        return <Button fullWidth variant="outlined" color="primary">{account}<br />{network}</Button>;
    }
}

export default Metamask;