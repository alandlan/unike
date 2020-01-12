import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import HomePresentation from '../presentation';

const HomeContainer = props => {
  function HomeLogout() {
    AsyncStorage.clear();
    props.navigation.navigate('Auth');
    console.log('Caiu aqui');
  }
  return <HomePresentation HomeLogout={HomeLogout} />;
};

export default HomeContainer;
