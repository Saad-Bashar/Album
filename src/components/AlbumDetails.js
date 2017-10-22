import React, { Component } from 'react';
import { View } from 'react-native';

class AlbumDetails extends Component {
  render() {
    const album = this.props.album;
    console.log(album.title);
    return (
      <View />
    );
  }
}

export default AlbumDetails;
