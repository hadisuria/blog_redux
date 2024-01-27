import React from 'react';
import {TouchableOpacity, Button, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBlogPost, editBlogPost, deleteBlogPost} from '../actions/BlogAction';
import BlogList from '../components/BlogList';

const IndexScreen = ({navigation, blogs, deleteBlogPost}) => {
  const onCreatePress = () => {
    console.log('onCreatePress called');
    navigation.navigate('Create');
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            onPress={() => {
              console.log('navigate to create screen');
              navigation.navigate('Create');
            }}>
            <Text style={styles.addIcon}>+</Text>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {blogs.length > 0 ? null : (
        <Button
          title="Press here or  tap the + button on top right screen"
          onPress={onCreatePress}
        />
      )}
      <BlogList
        items={blogs}
        navigation={navigation}
        onDelete={(id) => {
          deleteBlogPost(id);
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const {blogs} = state;
  return {blogs};
};

const mapDispatchToProps = (dispatch) => {
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
  },
  bloglist: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addIcon: {
    fontSize: 34,
    marginRight: 15,
  },
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(IndexScreen);
