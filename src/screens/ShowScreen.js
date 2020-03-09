import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBlogPost, editBlogPost, deleteBlogPost} from '../actions/BlogAction';

const ShowScreen = props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.title}
          value={props.blogs.title}
          multiline={true}
          placeholder="title"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.content}
          value={props.blogs.content}
          multiline={true}
          placeholder="Write content here"
          textAlignVertical={'top'}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setContent(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => {
          props.editBlogPost(title, content, props.blogs.id);
        }}>
        <Text style={styles.saveBtnText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  const {blogs} = state;
  return {blogs};
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addblogpostrun: state => {
//       dispatch({type: 'ADD_BLOGPOST', payload: state});
//     },
//     editblogpostrun: state => {
//       dispatch({type: 'EDIT_BLOGPOST', payload: state});
//     },
//   };
// };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addBlogPost,
      deleteBlogPost,
      editBlogPost,
    },
    dispatch,
  );

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
export default connect(mapStateToProps, mapDispatchToProps)(ShowScreen);
