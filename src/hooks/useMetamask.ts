import useSelector from './useSelector';

const useMetamask = () => useSelector(state => state.metamask);

export default useMetamask;