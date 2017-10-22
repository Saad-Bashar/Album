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

export default class Header extends React.Component {
  render() {
    const { textStyle, headerContainer } = styles;
    const { text } = this.props;
    return (
      <View style={headerContainer}>
        <Text style={textStyle}>{ text }</Text>
      </View>
    );
  }
}
