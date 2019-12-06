import { ActionTypes } from './actions';

const todoInEditMode = (state = null, { type, payload }) => {
  switch (type) {
    case ActionTypes.PUT_TODO_TO_EDIT_MODE:
      return payload;
    case ActionTypes.REMOVE_TODO_FROM_EDIT_MODE:
      return null;
    default:
      return state;
  }
};

export default todoInEditMode;
