import React from 'react';
import {StyleSheet, View} from 'react-native';

import TableTest from './TableTest';

const CharacterList = () => {
  return (
    <>
      <View style={styles.listWrapper}>
        <TableTest />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    padding: 16,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 16,
    height: '80%',
  },
});

export default CharacterList;
