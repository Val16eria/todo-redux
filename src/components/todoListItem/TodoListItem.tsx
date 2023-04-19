import React, { FC } from 'react';

import './TodoListItem.css';

const TodoListItem: FC = () => {

    return (
        <ul>
            <li className='todo-description'>
                <input type='checkbox' />
                <a>title</a>
            </li>
        </ul>
    );
}

export default TodoListItem;
