import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { setFilter } from '../../store/action-creators';
import { VisibilityFilterType } from '../../types/todo';

import './TodoFilter.css';

const TodoFilter:FC = () => {

    const dispatch = useDispatch();

    const handleClick = (filter: VisibilityFilterType) => {
        dispatch(setFilter(filter));
    }

    return (
        <div className='todo-links'>
            <a onClick={() => handleClick('SHOW_ALL')}>All</a>
            <a onClick={() => handleClick('SHOW_COMPLETED')}>Completed</a>
            <a onClick={() => handleClick('SHOW_ACTIVE')}>Active</a>
        </div>
    );
}

export default TodoFilter;
