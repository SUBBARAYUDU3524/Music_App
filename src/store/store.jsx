import {createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/auth';
import favoritesReducer from './reducers/favorites';

const rootReducer = combineReducers({
  auth: authReducer,
  favorites: favoritesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
