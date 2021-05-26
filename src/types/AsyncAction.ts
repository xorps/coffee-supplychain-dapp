import { ThunkAction } from 'redux-thunk';
import State from './State';
import Action from './Action';

type AsyncAction<T> = ThunkAction<T, State, unknown, Action>;

export default AsyncAction;