import React, { FC } from 'react';

import TodoListItem from '../todoListItem';

import './TodoList.css';

const TodoList: FC = () => {


    return (
        <div className='todo-container'>
            <h1>Tasks List</h1>
            <div className='todo-links'>
                <a>All</a>
                <a>Opened</a>
                <a>Closed</a>
            </div>
            <TodoListItem />
      </div>
    );
}
export default TodoList;
