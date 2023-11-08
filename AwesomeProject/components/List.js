import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {useFans} from './Context';

const List = ({people}) => {
  const navigation = useNavigation();
  const {
    selectedFans,
    addSelectedFan,
    deleteSelectedFan,
    setFemaleFans,
    setMaleFans,
    setOtherFans,
  } = useFans();

  const isFanSelected = item =>
    selectedFans.some(fan => fan.name === item.name);

  const handleSwitchIcon = fan => {
    const characterGender = fan.gender;

    const count = !isFanSelected(fan) ? 1 : -1;
    const callback = person => person + count;

    if (characterGender === 'female') {
      setFemaleFans(callback);
    } else if (characterGender === 'male') {
      setMaleFans(callback);
    } else {
      setOtherFans(callback);
    }
    if (isFanSelected(fan)) {
      deleteSelectedFan(fan);
    } else {
      addSelectedFan(fan);
    }
  };

  return (
    <FlatList
      data={people}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <View style={styles.row}>
          <TouchableWithoutFeedback onPress={() => handleSwitchIcon(item)}>
            <Icon
              name={isFanSelected(item) ? 'heart' : 'heart-o'}
              size={20}
              color={isFanSelected(item) ? 'red' : 'white'}
              style={styles.icon}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Details', {person: item});
            }}>
            <Text style={styles.cell}>{item.name}</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Icon name="heart" size={20} color="red" style={styles.icon} />
          <Text style={styles.headerCell}>Name</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 9,
  },
  icon: {
    flex: 1,
    textAlign: 'left',
    minWidth: 40,
  },
  cell: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Anakin',
    flex: 1,
    textAlign: 'left',
    minWidth: 220,
  },
  header: {
    minWidth: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    padding: 8,
    fontWeight: 'bold',
  },
  headerCell: {
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'Anakin',
    flex: 1,
    textAlign: 'left',
    minWidth: 220,
  },
});

export default List;
