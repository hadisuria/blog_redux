import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBlogPost, editBlogPost, deleteBlogPost} from '../actions/BlogAction';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = props => {
  return (
    <View style={{flex: 1}}>
      <BlogPostForm
        style={{flex: 1}}
        initialValues={{title: props.blogs.title, content: props.blogs.content}}
        onSubmit={(title, content) => {
          console.log('data=', title, content);
          props.addBlogPost(title, content);
          props.navigation.pop();
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
      addBlogPost,
      deleteBlogPost,
      editBlogPost,
    },
    dispatch,
  );

  return something;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingBottom: 5,
  },
  content: {
    flex: 1,
    margin: 5,
    fontSize: 18,
  },
  saveBtn: {
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'flex-end',
    fontSize: 24,
    alignItems: 'center',
    marginBottom: 5,
  },
  saveBtnText: {
    justifyContent: 'flex-end',
    fontSize: 24,
    alignItems: 'center',
    padding: 5,
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(CreateScreen);
