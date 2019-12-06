import { ActionTypes } from './actions';

const isModalOpen = (state = false, { type }) => {
  switch (type) {
    case ActionTypes.OPEN_MODAL:
      return true;
    case ActionTypes.CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};

export default isModalOpen;
