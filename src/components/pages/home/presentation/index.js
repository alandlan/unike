import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

const HomePresentation = props => {
  return (
    <View>
      <Text>Home page here</Text>
      <Button title="Logout" onPress={props.HomeLogout} />
    </View>
  );
};

export default HomePresentation;
