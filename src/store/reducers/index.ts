import { combineReducers } from 'redux';
import { todoReducers, todoVisibility } from './todoReducers';

export const rootReducer = combineReducers({
    todos: todoReducers,
    filter: todoVisibility
})

export type RootState = ReturnType<typeof rootReducer>
