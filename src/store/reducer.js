import { TOGGLE_TODO_THEME } from './Constants';

const initState = {
    theme: 'light',
};

function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_TODO_THEME:
            let newState = state;
            newState.theme = action.payload;
            return newState;

        default:
            throw new Error('Invalid action.');
    }
}

export { initState };
export default reducer;
