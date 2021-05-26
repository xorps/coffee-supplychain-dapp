import React from 'react';
import Box from '@material-ui/core/Box';
import Metamask from './Metamask';
import Form from './Form';
import useMetamask from '../hooks/useMetamask';

function App() {
    const metamask = useMetamask();
    if (metamask.tag === "Connected") {
        return <>
            <Metamask />
            <Box paddingTop="50px">
                <Form />
            </Box>
        </>;
    } else {
        return <Metamask />;
    }
}

export default App;