import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useTypeSelector } from '../../../../store';
import { getTodosThunk } from '../../model/action';

import { Item } from '../item';
import { Filter } from '../filter';

import Spinner from '../../../../assets/spinner.svg';
import './List.css';

export const List: FC = () => {
    const dispatch = useAppDispatch();

    const { filter } = useParams();
    const { loading, error, list } = useTypeSelector(state => state.todos);

    useEffect(() => {
        if (list.length === 0)
            dispatch(getTodosThunk());
    }, []);

    const filterList = () => {
        if (filter === 'completed')
            return list.filter((el) => el.completed);

        if (filter === 'active')
            return list.filter((el) => !el.completed);

        return list;
    };

    const filteredList = filterList();

    if (loading) {
        return <img className='list-loading' src={Spinner} alt='spinner' />
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className='todo-container'>
            <h1>Tasks List</h1>
            <Filter />
            <ul>
                {filteredList.map((el: any) => (
                    <Item key={el.id} {...el} />
                ))}
            </ul>
        </div>
    );
};
