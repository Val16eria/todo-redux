import React, { FC } from 'react';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import {setFilter} from "../../store/action-creators";
import {VisibilityFilterType} from "../../types/todo";
import {useDispatch} from "react-redux";



const TodoFilter:FC = () => {

    const filter = useTypeSelector(state => state.filter);
    console.log('filter', filter)
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
