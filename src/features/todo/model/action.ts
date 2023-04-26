import axios from 'axios';
import { Dispatch } from 'redux';

import { TodoActionTypes } from './types';

export const requestTodos = () => {
    return { type: TodoActionTypes.ACTION_TODOS_REQUEST }
}

export const getTodos = (data: any[]) => {
    return { type: TodoActionTypes.ACTION_TODOS_SUCCESS, payload: data }
}

export const errorTodo = () => {
    return { type: TodoActionTypes.ACTION_TODOS_ERROR, payload: 'Проблемсы' }
}

export const toggleTodo = (id: number) => {
    return { type: TodoActionTypes.TOGGLE_TODO, payload: id }
}

export const getTodosThunk = () => async (dispatch: Dispatch) => {
    try {
        dispatch(requestTodos());
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5');
        dispatch(getTodos(response.data));
    } catch (e: unknown) {
        dispatch(errorTodo());
    }
}

