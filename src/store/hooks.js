import { useContext } from 'react';
import Context from './Context';

export const useTheme = () => {
    const [state, dispatch] = useContext(Context);

    return [state, dispatch];
};
