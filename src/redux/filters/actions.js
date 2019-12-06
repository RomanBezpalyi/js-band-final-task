export const ActionTypes = {
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
  SET_PRIORITY: 'SET_PRIORITY',
  SET_PROGRESS: 'SET_PROGRESS',
};

export const setFilter = (type, value) => ({
  payload: value,
  type,
});
