import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetails extends Component {
  render() {
    const album = this.props.album;
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: album.thumbnail_image }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.headerTextStyle}>
              {album.title}
            </Text>
            <Text>
              {album.artist}
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: album.image }}
          />
        </CardSection>
        <CardSection>
          <Button
            onPress={() => Linking.openURL(album.url)}
            text={'Buy Now'}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetails;
