import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

interface Ethereum {
    isMetaMask: boolean;
    isConnected: () => boolean;
    request: (_: {method: 'eth_requestAccounts'}) => Promise<string[]>;
}

type MetamaskState = { tag: 'Connect' }
                   | { tag: 'Loading' }
                   | { tag: 'Error'; message: string }
                   | { tag: 'Connected'; account: string }
                   ;

async function connect(): Promise<MetamaskState> {
    const win: Window & {ethereum?: Ethereum} = window;
    if (!win.ethereum || !win.ethereum.isMetaMask) {
        return {tag: 'Error', message: 'Metamask not installed'};
    }
    const accounts = await win.ethereum.request({method: 'eth_requestAccounts'});
    return {tag: 'Connected', account: accounts[0]};
}

function Metamask() {
    const [state, setState] = useState<MetamaskState>({tag: "Connect"});

    function onClick() {
        setState({tag: 'Loading'});
        connect()
            .then(state => setState(state))
            .catch(err => setState({tag: 'Error', message: `${err}`}));
    }

    if (state.tag === "Connect") {
        return <Button onClick={onClick} variant="outlined" color="primary">Connect to Metamask</Button>;
    } else if (state.tag === "Loading") {
        return <Button variant="outlined" color="primary">Loading...</Button>;
    } else if (state.tag === "Error") {
        return <Button variant="outlined" color="secondary">Error: {state.message}</Button>;
    } else {
        return <Button variant="outlined" color="primary">{state.account}</Button>;
    }
}

export default Metamask;