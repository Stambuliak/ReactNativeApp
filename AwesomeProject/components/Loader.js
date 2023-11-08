import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        style={styles.lottie}
        source={require('../assets/fonts/images/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: 1,
    opacity: 0.5,
  },
  lottie: {
    width: 200,
    height: 200,
  },
});

export default Loader;
