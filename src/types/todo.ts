export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    id: null | number
}

export type VisibilityFilterType =
    'SHOW_ALL'
    | 'SHOW_COMPLETED'
    | 'SHOW_ACTIVE';

export enum TodoActionTypes {
    ACTION_TODOS_REQUEST = 'ACTION_TODOS_REQUEST',
    ACTION_TODOS_SUCCESS = 'ACTION_TODOS_SUCCESS',
    ACTION_TODOS_ERROR = 'ACTION_TODOS_ERROR',
    SET_VISIBILITY = 'SET_VISIBILITY',
    TOGGLE_TODO = 'TOGGLE_TODO'
}

export interface IToggleTodo {
    type: TodoActionTypes.TOGGLE_TODO,
    payload: number
}

export interface IVisibilityFilter {
    type: TodoActionTypes.SET_VISIBILITY,
    payload: VisibilityFilterType
}

interface ITodoAction {
    type: TodoActionTypes.ACTION_TODOS_REQUEST,
}

interface ITodoSuccessAction {
    type: TodoActionTypes.ACTION_TODOS_SUCCESS;
    payload: any[];
}

interface ITodoErrorAction {
    type: TodoActionTypes.ACTION_TODOS_ERROR;
    payload: string;
}

export type TodoActions =
    ITodoAction
    | ITodoSuccessAction
    | ITodoErrorAction
    | IToggleTodo;
