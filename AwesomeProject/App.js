import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import ButtonClear from './components/Button';
import Sections from './components/Sections';
import CharacterList from './components/CharacterList';
import {FansProvider} from './components/Context';

const App = () => {
  return (
    <FansProvider>
      <ImageBackground
        source={require('./assets/fonts/images/starwars.jpg')}
        style={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Star Wars Fans</Text>
            <ButtonClear />
          </View>
          <Sections />
          <CharacterList />
        </SafeAreaView>
      </ImageBackground>
    </FansProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'scroll',
    paddingVertical: 24,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: 'StarJedi',
    fontSize: 24,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default App;
