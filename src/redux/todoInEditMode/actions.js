export const ActionTypes = {
  PUT_TODO_TO_EDIT_MODE: 'PUT_TODO_TO_EDIT_MODE',
  REMOVE_TODO_FROM_EDIT_MODE: 'REMOVE_TODO_FROM_EDIT_MODE',
};

export const putTodoToEditMode = todo => ({
  type: ActionTypes.PUT_TODO_TO_EDIT_MODE,
  payload: todo,
});

export const removeTodoFromEditMode = () => ({
  type: ActionTypes.REMOVE_TODO_FROM_EDIT_MODE,
});
