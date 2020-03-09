import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {editBlogPost, deleteBlogPost} from '../actions/BlogAction';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({blogs, navigation, editBlogPost}) => {
  const id = navigation.getParam('id');
  const blogPost = blogs.find(blogPost => blogPost.id === id);

  //   console.log('Edit screen id: ', id);
  //   console.log('BlogPost: ', blogPost);
  //   console.log('Blogs: ', blogs);
  return (
    <View style={{flex: 1}}>
      <BlogPostForm
        style={{flex: 1}}
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
          editBlogPost(title, content, id);
          console.log('onSubmit', title, content, id);
          navigation.pop();
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {blogs: state.blogs};
};

const mapDispatchToProps = dispatch => {
  const something = bindActionCreators(
    {
      editBlogPost,
    },
    dispatch,
  );

  return something;
};

const styles = StyleSheet.create({});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);
