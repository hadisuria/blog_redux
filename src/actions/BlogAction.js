export const addBlogPost = (title, content) => ({
  type: 'ADD_BLOGPOST',
  payload: {title, content},
});

export const deleteBlogPost = id => ({
  type: 'DELETE_BLOGPOST',
  payload: id,
});

export const editBlogPost = (title, content, id) => ({
  type: 'EDIT_BLOGPOST',
  payload: {title, content, id},
});
