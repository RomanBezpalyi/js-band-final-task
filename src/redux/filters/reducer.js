import { ActionTypes } from './actions';

const initialState = {
  title: '',
  progress: 'All',
  priority: 'All',
};

const filters = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SEARCH_QUERY:
      return { ...state, title: payload };
    case ActionTypes.SET_PROGRESS:
      return { ...state, progress: payload };
    case ActionTypes.SET_PRIORITY:
      return { ...state, priority: payload };
    default:
      return state;
  }
};

export default filters;
