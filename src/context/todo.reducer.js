import { SET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './todo.actions';

export const todoReducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: data };
    case ADD_TODO:
      const todos = {
        ...state.todos,
        [data.id]: { description: data.description },
      };
      return { ...state, todos };
    case DELETE_TODO:
      const todo2 = {
        ...state.todos,
      };
      delete todo2[data.id];
      return { ...state, todos: todo2 };
    case UPDATE_TODO:
      const todo3 = {
        ...state.todos,
      };
      todo3[data.id] = data.description;
      return { ...state, todos: todo3 };
    default:
      return state;
  }
};
