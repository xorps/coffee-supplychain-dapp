import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Padded from './Padded';

export default function NewProduct() {
    return (
        <Card>
            <CardHeader title="New Product" />
            <CardContent>
                <Padded amount="5px">
                    <TextField label="notes" />
                    <TextField label="price" />
                </Padded>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">Add</Button>
            </CardActions>
        </Card>
    );
}