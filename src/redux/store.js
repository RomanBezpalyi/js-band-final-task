import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import sessionReducer from './session/reducer';
import books from './books/reducer';
import cartList from './cartList/reducer';
import isLogOutModalOpen from './controllers/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'username', 'avatar'],
};

const rootReducer = combineReducers({
  session: persistReducer(persistConfig, sessionReducer),
  books,
  cartList,
  isLogOutModalOpen,
});

const middleware = [ReduxThunk];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
