import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import isModalOpen from './modalController/reducer';
import todoInEditMode from './todoInEditMode/reducer';
import todos from './todos/reducer';
import filters from './filters/reducer';

const rootReducer = combineReducers({
  todos,
  isModalOpen,
  todoInEditMode,
  filters,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
