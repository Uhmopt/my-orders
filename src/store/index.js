import {combineReducers, createStore} from 'redux';
import reducers from './reducers';
const store = createStore(combineReducers(reducers));

store.subscribe(() => {
  const storeData = store.getState();

  console.log('store Data: ', storeData);
});

// Auth check when reload
store.dispatch({type: 'CHECK_AUTH'});

export default store;
