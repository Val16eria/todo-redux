import { Dispatch } from 'redux';
import axios from 'axios';

import { TodoActions } from '../../types/todo';
import { errorTodo, getTodos, requestTodos } from './index'

export const actionTodos = () => {
    return async (dispatch: Dispatch<TodoActions>) => {
        try {
            dispatch(requestTodos());
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
            dispatch(getTodos(response.data));
        } catch (e: unknown) {
            dispatch(errorTodo());
        }
    }
}
