import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { VisibilityFilterType } from '../../types/todo';
import { toggleTodo } from '../../store/action-creators';

import './TodoListItem.css';


const TodoListItem: FC = () => {

    const filter = useTypeSelector(state => state.filter);
    const { todos } = useTypeSelector(state => state.todos);

    const dispatch = useDispatch();

    const handleClick = (id:number) => {
        dispatch(toggleTodo(id));
    }

    const setTodo = (filter: VisibilityFilterType) => {
        switch (filter) {
            case 'SHOW_ALL': {
                return todos;
            }
            case 'SHOW_COMPLETED': {
                return todos.filter(i => i.completed);
            }
            case 'SHOW_ACTIVE': {
                return todos.filter(i => !i.completed);
            }
            default: {
                return todos;
            }
        }
    }

    return (
        <ul>
            {setTodo(filter).map(i => {
                return (
                    <li key={i.id} className='todo-description' >
                        <label>
                            <input
                                type='checkbox'
                                defaultChecked={i.completed}
                                onClick={() => handleClick(i.id)}
                            />
                            {i.title}
                        </label>
                    </li>
                );
            })}
        </ul>
    );
}

export default TodoListItem;
