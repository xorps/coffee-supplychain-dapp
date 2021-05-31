import React from 'react';
import Metamask from './Metamask';
import Padded from './Padded';
import HarvestItem from './HarvestItem';
import NewProduct from './NewProduct';
import { useWallet } from '../store';

function App() {
    const wallet = useWallet();
    return <>
        <Padded amount="10px">
            <Metamask />
            {wallet.state === 'WalletConnected' && <NewProduct />}
            {wallet.state === 'WalletConnected' && <HarvestItem />}
        </Padded>
    </>;
}

export default App;