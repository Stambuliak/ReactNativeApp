import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {FansProvider} from './Context';
import {useRoute} from '@react-navigation/native';
import Loader from './Loader';

const Details = () => {
  const route = useRoute();
  const person = route.params?.person;
  const [homeWorld, setHomeWorld] = useState('');
  const [species, setSpecies] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(person.homeworld);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const home = data.name;
        setHomeWorld(home);

        const fetchSpecies = async speciesUrl => {
          if (!speciesUrl) {
            return 'Unknown';
          }
          const answer = await fetch(speciesUrl);
          const speciesData = await answer.json();
          return speciesData.name;
        };

        const speciesName =
          person.species.length > 0
            ? await fetchSpecies(person.species[0])
            : 'Unknown';

        setSpecies(speciesName);
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [person]);

  return (
    <FansProvider>
      <ImageBackground
        source={require('../assets/fonts/images/ANAKIN.jpg')}
        style={styles.backgroundImage}>
        {isLoading ? (
          <Loader />
        ) : (
          <SafeAreaView style={styles.container}>
            <View style={styles.header}>
              <Text
                style={styles.headerText}>{`Star Wars ${person.name}`}</Text>
            </View>
            <View style={styles.listWrapper}>
              <View style={styles.headercell}>
                <Text style={styles.cell}>{`Person: ${person.name}`}</Text>
                <Text style={styles.cell}>{`Height: ${person.height}`}</Text>
                <Text style={styles.cell}>{`Mass: ${person.mass}`}</Text>
                <Text
                  style={
                    styles.cell
                  }>{`Hair Color: ${person.hair_color}`}</Text>
                <Text
                  style={
                    styles.cell
                  }>{`Skinn Color: ${person.skin_color}`}</Text>
                <Text
                  style={styles.cell}>{`Eye Color: ${person.eye_color}`}</Text>
                <Text
                  style={
                    styles.cell
                  }>{`Birth Year: ${person.birth_year}`}</Text>
                <Text style={styles.cell}>{`Gender: ${person.gender}`}</Text>
                <Text style={styles.cell}>{`HomeWorld: ${homeWorld}`}</Text>
                <Text style={styles.cell}>{`Species: ${species}`}</Text>
              </View>
            </View>
          </SafeAreaView>
        )}
        {/* <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{`Star Wars ${person.name}`}</Text>
          </View>
          <View style={styles.listWrapper}>
            <View style={styles.headercell}>
              <Text style={styles.cell}>{`Person: ${person.name}`}</Text>
              <Text style={styles.cell}>{`Height: ${person.height}`}</Text>
              <Text style={styles.cell}>{`Mass: ${person.mass}`}</Text>
              <Text
                style={styles.cell}>{`Hair Color: ${person.hair_color}`}</Text>
              <Text
                style={styles.cell}>{`Skinn Color: ${person.skin_color}`}</Text>
              <Text
                style={styles.cell}>{`Eye Color: ${person.eye_color}`}</Text>
              <Text
                style={styles.cell}>{`Birth Year: ${person.birth_year}`}</Text>
              <Text style={styles.cell}>{`Gender: ${person.gender}`}</Text>
              <Text style={styles.cell}>{`HomeWorld: ${homeWorld}`}</Text>
              <Text style={styles.cell}>{`Species: ${species}`}</Text>
            </View>
          </View>
        </SafeAreaView> */}
      </ImageBackground>
    </FansProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: 'StarJedi',
    fontSize: 32,
  },
  cell: {
    color: 'white',
    fontFamily: 'Anakin',
    fontSize: 20,
    paddingBottom: 32,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  listWrapper: {
    padding: 16,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 16,
    height: '84%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  headercell: {
    minWidth: 220,
    justifyContent: 'space-between',
    padding: 8,
    fontWeight: 'bold',
  },
});

export default Details;
