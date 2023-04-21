import React, { FC, useEffect } from 'react';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useAction } from '../../hooks/useAction';

import TodoListItem from '../todoListItem';
import TodoFilter from '../todoFilter/TodoFilter';

import './TodoList.css';

const TodoList: FC = () => {
    const { actionTodos } = useAction();
    const { loading, error } = useTypeSelector(state => state.todos);

    useEffect(() => {
        actionTodos();
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='todo-container'>
            <TodoFilter />
            <TodoListItem />
      </div>
    );
}
export default TodoList;
