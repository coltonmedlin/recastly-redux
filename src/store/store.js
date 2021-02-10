import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const configureStore = (initState) => {
  return createStore(
    rootReducer,
    initState,
    applyMiddleware(thunk)
  );
};

const store = configureStore();

export default store;