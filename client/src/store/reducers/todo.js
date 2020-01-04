import {ADD_TODO} from '../actions/constants';

const todoReducer = (state = [], {type, payload}) => {
    switch (type) {
      case ADD_TODO:
        return [...state, payload]
      default:
        return state
    }
}

export default todoReducer;
