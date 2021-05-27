import { useSelector as _useSelector } from 'react-redux';
import State from '../types/State';

const useSelector: <T>(select: (state: State) => T) => T = (select) => _useSelector(select);

export default useSelector;