import { useDispatch } from 'react-redux';
import createStore from '../createStore';

const dispatch = () => createStore().dispatch;

type TDispatch = ReturnType<typeof dispatch>;

export default function () {
    return useDispatch<TDispatch>();
}