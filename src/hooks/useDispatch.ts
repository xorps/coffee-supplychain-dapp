import { useDispatch  as _useDispatch } from 'react-redux';
import createStore from '../createStore';

const dispatch = () => createStore().dispatch;

type TDispatch = ReturnType<typeof dispatch>;

const useDispatch = () => _useDispatch<TDispatch>();

export default useDispatch;