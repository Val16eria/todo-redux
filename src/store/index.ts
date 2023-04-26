import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { todoReducers } from '../features/todo/model/reducer';

export const rootReducer = combineReducers({
    todos: todoReducers,
})

export type RootState = ReturnType<typeof rootReducer>

type AppDispatch = ThunkDispatch<RootState, any, any>;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector


export const store  = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
