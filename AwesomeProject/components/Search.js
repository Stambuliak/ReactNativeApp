import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = ({handleChangeSearch}) => {
  return (
    <View style={styles.search}>
      <Icon name="search" size={20} color="white" style={styles.icon_search} />
      <TextInput
        style={styles.text}
        placeholder="Search..."
        placeholderTextColor="gray"
        onChangeText={handleChangeSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 8,
    color: 'gray',
  },
  search: {
    borderWidth: 2,
    borderColor: 'white',
    width: '100%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon_search: {
    paddingLeft: 24,
    marginRight: 20,
  },
});

export default Search;
