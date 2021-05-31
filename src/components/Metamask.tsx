import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Padded from './Padded';
import { useDispatch, useWallet } from '../store';
import { ConnectWallet } from '../actions';

const Tag: React.FunctionComponent<{label: string; text: string}> = ({label, text}) => <>
    <Chip color="primary" label={text} icon={
        <span className="MuiChip-avatarColorPrimary" style={{marginLeft: '5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '15px'}}>{label}</span>
    }
    />
</>;

function Metamask() {
    const wallet = useWallet();
    const dispatch = useDispatch();
    const onClick = () => dispatch(ConnectWallet());
    if (wallet.state === 'Offline') {
        return <Button fullWidth onClick={onClick} variant="outlined" color="primary">Connect to Metamask</Button>;
    }
    if (wallet.state === 'WalletConnecting') {
        return <>
            <Box display="flex" alignItems="center" justifyContent="center">Loading Wallet...</Box>
            <Box display="flex" alignItems="center" justifyContent="center"><LinearProgress style={{width: '100%'}}/></Box>
        </>;
    }
    if (wallet.state === 'WalletConnectionFailed') {
        return <Button fullWidth onClick={onClick} variant="outlined" color="secondary">Error: {wallet.error}</Button>;
    } 
    const {contractAddress, network, account} = wallet;
    return <>
        <Padded amount="5px">
            <Tag label="contract" text={contractAddress} />
            <Tag label="network" text={network} />
            <Tag label="account" text={account} />
        </Padded>
    </>;
}

export default Metamask;