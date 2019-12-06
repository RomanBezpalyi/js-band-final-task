export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

export const addTodo = todo => ({
  type: ActionTypes.ADD_TODO,
  payload: todo,
});

export const updateTodo = todo => ({
  type: ActionTypes.UPDATE_TODO,
  payload: todo,
});

export const deleteTodo = todo => ({
  type: ActionTypes.DELETE_TODO,
  payload: todo,
});
