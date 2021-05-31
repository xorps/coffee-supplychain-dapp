import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

const Padded: FunctionComponent<{amount: string}> = ({amount, children}) => {
    return <>{React.Children.map(children, child => <Box paddingLeft={amount} paddingRight={amount} paddingTop={amount} paddingBottom={amount}>{child}</Box>)}</>;
}

export default Padded;