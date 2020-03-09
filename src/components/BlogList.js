import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const BlogList = ({items, navigation, onDelete}) => {
  // console.log('datanya BlogList', items);
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={item => JSON.stringify(item.id)}
        renderItem={item => (
          <View style={styles.listContainer}>
            {/* {console.log('flatlist item', item)} */}
            <TouchableOpacity
              onPress={() => {
                // console.log('flatlist', item); // return to edit screen/ show screen
                navigation.navigate('Edit', {id: item.item.id});
              }}>
              <View style={styles.listItem}>
                <Text style={styles.text}>
                  {item.index + 1}. {item.item.title}
                </Text>
                <TouchableOpacity
                  style={styles.deleteIcon}
                  onPress={() => {
                    onDelete(item.item.id);
                  }}>
                  <Icon name="trash" style={styles.deleteIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listItem: {
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  text: {
    fontSize: 18,
  },
  deleteIcon: {
    fontSize: 26,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
});

export default BlogList;
