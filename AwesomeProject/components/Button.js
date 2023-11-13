import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useFans} from './Context';

const ButtonClear = () => {
  const {setFemaleFans, setMaleFans, setOtherFans, clearSelectedFans} =
    useFans();
  const handleClearFans = () => {
    setFemaleFans(0);
    setMaleFans(0);
    setOtherFans(0);
    clearSelectedFans();
  };

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={handleClearFans}
      activeOpacity={0.7}>
      <Text style={styles.buttonText}>Clear Fans</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: '33%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#a75f73',
  },
  buttonText: {
    fontFamily: 'Anakin',
    color: 'white',
    textAlign: 'center',
  },
});

export default ButtonClear;
