import useSelector from './useSelector';

export default function useMetamask() {
    return useSelector(state => state.metamask);
}