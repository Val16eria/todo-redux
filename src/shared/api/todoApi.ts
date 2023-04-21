import {
    BadResponse,
    TODO_RESULT_TYPE,
    TodoResult,
    TTodo
} from '../types';
import axios from 'axios';

export const getTodoList = async ():Promise<TodoResult<TTodo[]>> => {
    try {
        const todoData = await axios.get<TTodo[]>('https://jsonplaceholder.typicode.com/todos');
        return {
            type: TODO_RESULT_TYPE.SUCCESS,
            data: todoData.data
        };
    } catch (e: unknown) {
        const error= e as BadResponse;
        return {
            type: TODO_RESULT_TYPE.FAILURE,
            data: error.response?.data?.reason || 'Извините что-то пошло не так'
        }
    }
}
