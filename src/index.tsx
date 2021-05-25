import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Provider } from 'react-redux';
import { createStore } from './store';
import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box padding="50px">
                    <Provider store={createStore()}>
                        <App />
                    </Provider>
                </Box>
            </Container>
        </React.Fragment>
    </React.StrictMode>,
    document.getElementById('root')
);