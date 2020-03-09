import {ADD_BLOGPOST, EDIT_BLOGPOST, DELETE_BLOGPOST} from '../actions/types';

const initialValues = {
  blogList: [
    {
      id: '',
      title: '',
      content: '',
    },
  ],
};

const blogReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_BLOGPOST:
      // console.log('adding data');
      // console.log('state = ', state);
      // console.log('action=', action);
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case DELETE_BLOGPOST:
      return state.filter(blogPost => blogPost.id !== action.payload);
    case EDIT_BLOGPOST:
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

export default blogReducer;
