import React from 'react';
import Metamask from './Metamask';
import useMetamask from '../hooks/useMetamask';
import Padded from './Padded';
import HarvestItem from './HarvestItem';
import NewProduct from './NewProduct';

function App() {
    const metamask = useMetamask();
    if (metamask.tag === "Connected") {
        return <Padded amount="10px">
            <Metamask />
            <NewProduct />
            <HarvestItem />
        </Padded>
    } else {
        return <Padded amount="10px"><Metamask /></Padded>;
    }
}

export default App;