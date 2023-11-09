import { TOGGLE_TODO_THEME } from './Constants';

export const setTodoTheme = (payload) => ({
    type: TOGGLE_TODO_THEME,
    payload,
});
