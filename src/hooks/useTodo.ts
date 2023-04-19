import { useEffect, useState } from 'react';
import { TODO_RESULT_TYPE, TTodo } from '../shared/types';
import { getTodoList } from '../shared/api';

const useTodo = (): [TTodo[]] => {
    const [todos, setTodos] = useState<TTodo[]>([])

    useEffect(() => {
        const handleTodoList = async () => {
            const todoData = await getTodoList();

            if (todoData.type === TODO_RESULT_TYPE.SUCCESS) {
                setTodos(todoData.data);
            }
            if (todoData.type === TODO_RESULT_TYPE.FAILURE) {
                console.log('Problems');
            }
        }
        handleTodoList();
    },[])

    return [todos]
}

export default useTodo;
