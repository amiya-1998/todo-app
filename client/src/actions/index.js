import axios from 'axios';
import {
  FETCH_USER,
  FETCH_TODOS,
  DELETE_TODO,
  ADD_TODO,
  UPDATE_TODO
} from './types';

export const fetchUser = () => async dispatch => {
  const response = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: response.data.currentUser
  });
};

export const fetchTodo = () => async dispatch => {
  const response = await axios.get('/api/todos');
  response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  dispatch({
    type: FETCH_TODOS,
    payload: response.data
  });
};

export const addTodo = (todo, history) => async dispatch => {
  const response = await axios.post('/api/todo', todo);
  history.push('/todos');
  dispatch({
    type: ADD_TODO,
    payload: response.data
  });
};

export const deleteTodo = id => async dispatch => {
  await axios.delete(`/api/todo/${id}`);
  dispatch({
    type: DELETE_TODO,
    payload: id
  });
};

export const updateTodo = (todo, id, history) => async dispatch => {
  const response = await axios.put(`/api/todo/${id}`, todo);
  dispatch({
    type: UPDATE_TODO,
    payload: response.data
  });
  history.push('/todos');
};
