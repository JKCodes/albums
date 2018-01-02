import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  const { header, view } = styles;

  return (
    <View style={view}>
      <Text style={header}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { widht: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

export default Header;