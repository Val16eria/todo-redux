// import * as TodoActionCreators from './todo';
// export default {
//     ...TodoActionCreators
// }

import { TodoActionTypes } from '../../types/todo';

export const requestTodos = () => {
    return {type: TodoActionTypes.ACTION_TODOS_REQUEST} as const
}

export const getTodos = (data: any[]) => {
    return {type: TodoActionTypes.ACTION_TODOS_SUCCESS, payload: data} as const
}

export const errorTodo = () => {
    return {type: TodoActionTypes.ACTION_TODOS_ERROR, payload: 'Проблемсы'} as const
}

export const setFilter = (filter: string) => {
    return {type: TodoActionTypes.SET_VISIBILITY, payload: filter} as const
}

export const toggleTodo = (id: number) => {
    return {type: TodoActionTypes.TOGGLE_TODO, payload: id} as const
}

