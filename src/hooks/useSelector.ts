import { useSelector } from 'react-redux';
import State from '../types/State';

export default function <T>(select: (state: State) => T): T {
    return useSelector(select);
}