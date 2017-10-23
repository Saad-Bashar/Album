import React, { Component } from 'react';
import { FlatList } from 'react-native';
import AlbumDetails from './AlbumDetails';

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
    /* eslint-disable no-undef */
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(albums => this.setState({ albums }));
    /* eslint-enable no-undef */
  }

  // extracting the key for flat list
  keyExtractor = (item) => item.title;

  renderItem({ item }) {
    return (
      <AlbumDetails
        album={item}
      />
    );
  }

  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.albums}
        renderItem={this.renderItem}
      />
    );
  }
}
