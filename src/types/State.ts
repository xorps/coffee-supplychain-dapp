import createStore from '../createStore';

const getState = () => createStore().getState();

type State = ReturnType<typeof getState>;

export default State;