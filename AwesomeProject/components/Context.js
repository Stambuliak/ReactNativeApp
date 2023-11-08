import React, {createContext, useContext, useState} from 'react';

const FansContext = createContext();

export const FansProvider = ({children}) => {
  const [femaleFans, setFemaleFans] = useState(0);
  const [maleFans, setMaleFans] = useState(0);
  const [otherFans, setOtherFans] = useState(0);
  const [iconStates, setIconStates] = useState([]);
  const [person, setPerson] = useState('');
  const [selectedFans, setSelectedFans] = useState([]);

  const addSelectedFan = fan => {
    setSelectedFans([...selectedFans, fan]);
  };

  const deleteSelectedFan = fan => {
    setSelectedFans(prev => prev.filter(people => people.name !== fan.name));
  };

  const clearSelectedFans = () => {
    setSelectedFans([]);
  };

  return (
    <FansContext.Provider
      value={{
        iconStates,
        setIconStates,
        femaleFans,
        maleFans,
        setFemaleFans,
        setMaleFans,
        otherFans,
        setOtherFans,
        person,
        setPerson,
        selectedFans,
        setSelectedFans,
        addSelectedFan,
        clearSelectedFans,
        deleteSelectedFan,
      }}>
      {children}
    </FansContext.Provider>
  );
};

export const useFans = () => {
  return useContext(FansContext);
};
