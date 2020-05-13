import { createStore, applyMiddleware, compose } from 'redux';
import {combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import listReducer from './reducer/reducer.js';

const rootReducer = combineReducers({
    list: listReducer
});


export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(ReduxThunk))
  );
}
