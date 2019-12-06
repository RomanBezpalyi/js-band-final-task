import { ActionTypes } from './actions';

const todos = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TODO:
      return [payload, ...state];
    case ActionTypes.UPDATE_TODO: {
      const index = state.indexOf(state.find(todo => todo.id === payload.id));
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }
    case ActionTypes.DELETE_TODO:
      return [...state.filter(todo => todo !== payload)];
    default:
      return state;
  }
};

export default todos;
