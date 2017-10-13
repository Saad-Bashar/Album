import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  headerContainer: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }

});

const Header = (props) => {
  const { textStyle, headerContainer } = styles;
  const { text } = props;
  return (
    <View style={headerContainer}>
      <Text style={textStyle}>{ text }</Text>
    </View>
  );
};


export default Header;
