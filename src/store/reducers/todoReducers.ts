import {
    IVisibilityFilter,
    TodoActions,
    TodoActionTypes,
    TodoState,
    VisibilityFilterType
} from '../../types/todo';

const initialState:TodoState = {
    todos: [],
    loading: false,
    error: null,
    id: null
}

export const todoReducers = (state = initialState, action: TodoActions): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ACTION_TODOS_REQUEST:
            return {...state, loading: true};
        case TodoActionTypes.ACTION_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case TodoActionTypes.ACTION_TODOS_ERROR:
            return {...state, loading: false, error: action.payload};
        case TodoActionTypes.TOGGLE_TODO:
            return {...state, id: action.payload, todos: state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                    return todo
                }
                else return todo
            })}
        default:
            return state;
    }
}

export const todoVisibility = (state: VisibilityFilterType = 'SHOW_ALL', action: IVisibilityFilter) => {
    switch (action.type) {
        case TodoActionTypes.SET_VISIBILITY:
            return action.payload
        default:
            return state;
    }
}
