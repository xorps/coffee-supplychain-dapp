import React, { useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Padded from './Padded';
import { useDispatch } from '../store';

type FormState 
    = {tag: 'Loading'}
    | {tag: 'Error', message: string}
    | {tag: 'Ready'}
    ;

export default function NewProduct() {
    const [state, setState] = useState<FormState>({tag: 'Ready'});
    const dispatch = useDispatch();
    const notes_ = useRef<HTMLInputElement>();
    const price_ = useRef<HTMLInputElement>();

    async function onClick() {
        try {
            setState({tag: 'Loading'});
            const notes = notes_.current?.value || '';
            const price = price_.current?.value || '';
            setState({tag: 'Ready'});
        } catch (err) {
            const message = String(err);
            setState({tag: 'Error', message});
        }
    }

    return (
        <Card>
            <CardHeader title="New Product" />
            <CardContent>
                <Padded amount="5px">
                    <TextField label="notes" inputRef={notes_} />
                    <TextField label="price" inputRef={price_} />
                </Padded>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} variant="contained" color="primary">Add</Button>
            </CardActions>
        </Card>
    );
}