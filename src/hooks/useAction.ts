import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActionCreator from '../store/action-creators/todo';
// import ActionCreators from '../store/action-creators';

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(TodoActionCreator, dispatch)
}
