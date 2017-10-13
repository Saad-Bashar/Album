import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: 'lightgoldenrodyellow',
    borderWidth: 1,
    borderColor: 'goldenrod',
    height: 150,
    width: 150
  }
});
