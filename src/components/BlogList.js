import React from 'react';
import {FlatList, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const BlogList = ({items, edit, onDelete, navigation}) => {
  console.log('datanya BlogList', items);
  return (
    <View>
      {items.map((item, _index) => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Edit', {id: item.id});
            }}>
            <View style={styles.listItem}>
              <Text style={styles.text}>
                {_index + 1}. {item.title}
              </Text>
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => {
                  onDelete(item.id);
                }}>
                <Icon name="trash" style={styles.deleteIcon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
