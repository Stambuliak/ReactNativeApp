/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useFans} from './Context';
import Loader from './Loader';
import Search from './Search';
import List from './List';

const TableTest = () => {
  const [pageNextUrl, setPageNextUrl] = useState('');
  const [pagePrevUrl, setPagePrevUrl] = useState('');
  const [searchText, setSearchText] = useState('');
  const [people, setPeople] = useState([]);
  const [peopleCount, setPeopleCount] = useState(0);
  const [peoplePerPage, setPeoplePerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [urlOriginal, setUrlOriginal] = useState(
    'https://swapi.dev/api/people/',
  );
  const {setFemaleFans, setMaleFans, setOtherFans} = useFans();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(urlOriginal);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        if (isMounted) {
          setPeopleCount(data.count);

          if (data.previous) {
            setPagePrevUrl(data.previous);
          } else {
            setPagePrevUrl('');
          }
          if (data.next) {
            setPageNextUrl(data.next);
          }

          const characters = data.results.map(character => ({
            ...character,
            favorite: false,
          }));
          setPeople(characters);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [urlOriginal]);

  const handleSwitchIcon = item => {
    const characterGender = item.gender;

    const test = !item.favorite ? 1 : -1;
    const callback = person => person + test;

    if (characterGender === 'female') {
      setFemaleFans(callback);
    } else if (characterGender === 'male') {
      setMaleFans(callback);
    } else {
      setOtherFans(callback);
    }
  };

  const filteredPeople = people.filter(person =>
    person.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleNextPage = url => {
    setUrlOriginal(url);
    setPeoplePerPage(prev => prev + people.length);
  };

  const handlePrevPage = url => {
    setUrlOriginal(url);
    setPeoplePerPage(prev => prev - people.length);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Search handleChangeSearch={setSearchText} />
      <View style={styles.list}>
        <View style={styles.container}>
          <List people={filteredPeople} handleSwitchIcon={handleSwitchIcon} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonContainer1}
              onPress={() => handlePrevPage(pagePrevUrl)}
              activeOpacity={pagePrevUrl.length ? 0.7 : 1}
              disabled={!pagePrevUrl.length}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: pagePrevUrl.length ? 'white' : 'gray',
                  },
                ]}>
                Prev
              </Text>
            </TouchableOpacity>
            <View style={styles.pageCount}>
              <Text
                style={
                  styles.buttonText
                }>{`${peoplePerPage}-${peopleCount}`}</Text>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer1}
              onPress={() => handleNextPage(pageNextUrl)}
              activeOpacity={0.7}
              disabled={!pageNextUrl.length}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: pageNextUrl.length ? 'white' : 'gray',
                  },
                ]}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },

  buttonprev: {
    marginRight: 20,
  },

  buttonContainer1: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: '33%',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#a75f73',
  },
  pageCount: {
    display: 'flex',
    justifyContent: 'center',
    height: 40,
    width: '33%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Anakin',
  },
  list: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    height: '88%',
  },
});

export default TableTest;
