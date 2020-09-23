export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const setTodos = (todos) => ({ type: SET_TODOS, data: todos });
export const addTodo = (id, description) => ({
  type: ADD_TODO,
  data: { id, description },
});
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  data: { id },
});
// export const updateTodo = (id, description) => ({
//   type: UPDATE_TODO,
//   data: { id, description },
// });
