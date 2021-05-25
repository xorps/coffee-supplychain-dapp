import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box padding="50px">
                    <App />
                </Box>
            </Container>
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);