import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
      <Header text={'Album'} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: 'lightgoldenrodyellow',
    borderWidth: 1,
    borderColor: 'goldenrod',
    height: 150,
    width: 150
  }
});
