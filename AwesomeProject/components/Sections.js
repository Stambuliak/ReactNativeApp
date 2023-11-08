import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFans} from './Context';

const Sections = () => {
  const {femaleFans, maleFans, otherFans} = useFans();

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.section}>
        <Text style={styles.text}>{femaleFans}</Text>
        <Text style={styles.text}>Female Fans</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>{maleFans}</Text>
        <Text style={styles.text}>Male Fans</Text>
      </View>
      <View style={[styles.section, styles.sectionLast]}>
        <Text style={styles.text}>{otherFans}</Text>
        <Text style={styles.text}>Other</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  section: {
    marginRight: 16,
    padding: 'auto',
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    height: 84,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionLast: {
    marginRight: 0,
  },

  text: {
    color: 'white',
    fontFamily: 'Anakin',
  },
});

export default Sections;
