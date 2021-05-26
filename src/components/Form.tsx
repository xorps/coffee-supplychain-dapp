import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function HarvestItem() {
    return (
        <Card>
            <CardHeader title="Harvest Item" />
            <CardContent>
                <TextField label="SKU" />
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">Harvest</Button>
            </CardActions>
        </Card>
    );
}

export default HarvestItem;