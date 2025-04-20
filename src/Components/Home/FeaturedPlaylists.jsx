import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import colors from '../../config/colors';

const FeaturedPlaylists = ({playlists, navigation}) => {
  // Function to construct image URL if not provided
  const getImageUrl = playlist => {
    // If the API provides an image URL directly
    if (playlist.image) return playlist.image;

    // Jamendo's standard image URL pattern for playlists
    return `https://usercontent.jamendo.com?type=album&id=${playlist.id}&width=300`;
  };

  return (
    <FlatList
      horizontal
      data={playlists}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Playlist', {playlist: item})}
          style={styles.playlistItem}>
          <Image
            source={{
              uri: getImageUrl(item),
              cache: 'force-cache', // Helps with image loading performance
            }}
            style={styles.playlistImage}
            onError={e =>
              console.log('Failed to load image:', e.nativeEvent.error)
            }
          />
          <Text style={styles.playlistTitle} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.playlistCreator} numberOfLines={1}>
            {item.user_name || 'Unknown creator'}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  playlistItem: {
    width: 150,
    marginRight: 15,
  },
  playlistImage: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: colors.secondaryDark, // Shows while loading
  },
  playlistTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  playlistCreator: {
    color: colors.secondaryLight,
    fontSize: 12,
    marginTop: 2,
  },
  listContent: {
    paddingRight: 15,
  },
});

export default FeaturedPlaylists;
