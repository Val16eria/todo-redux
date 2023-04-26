import { TodoActionTypes } from './types';

export interface TodoState {
    list: any[];
    loading: boolean;
    error: null | string;
}

export interface IToggleTodo {
    type: typeof TodoActionTypes.TOGGLE_TODO,
    payload: any[],
}

interface ITodoAction {
    type: typeof TodoActionTypes.ACTION_TODOS_REQUEST,
}

interface ITodoSuccessAction {
    type: typeof TodoActionTypes.ACTION_TODOS_SUCCESS;
    payload: any[];
}

interface ITodoErrorAction {
    type: typeof TodoActionTypes.ACTION_TODOS_ERROR;
    payload: string;
}

export type TodoActions =
    | ITodoAction
    | ITodoSuccessAction
    | ITodoErrorAction
    | IToggleTodo;
