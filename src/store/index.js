import {createStore, combineReducers} from 'redux';
import blogReducer from '../reducers/blogReducer';

const rootReducer = combineReducers({
  blogs: blogReducer,
});

const store = createStore(rootReducer, {
  blogs: [
    {title: 'tist', content: 'tis', id: 1},
    {title: 'test2', content: 'test2 content', id: 2},
  ],
});

export default store;
