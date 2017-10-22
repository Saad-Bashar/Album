import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

export default class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [] // initially empty album state
    };
  }
  componentWillMount() {
    /**
     * Loads all the album data when the component
     * is mounted
     */
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(albums => this.setState({ albums }));
  }

  keyExtractor = (item) => item.title;

  renderItem({ item }) {
    return (
      <Text>{item.title}</Text>
    );
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        extraData={this.state}
        data={this.state.albums}
        renderItem={this.renderItem}
      />
    );
  }
}
