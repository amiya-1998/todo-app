import {
  FETCH_TODOS,
  DELETE_TODO,
  ADD_TODO,
  UPDATE_TODO
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case ADD_TODO:
      return [action.payload, ...state];
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload);
    case UPDATE_TODO:
      let index = state.findIndex(todo => todo._id === action.payload._id);
      const new_state = state;
      new_state[index].description = action.payload.description;
      return new_state;
    default:
      return state;
  }
}
