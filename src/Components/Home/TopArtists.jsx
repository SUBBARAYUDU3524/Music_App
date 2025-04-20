import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import colors from '../../config/colors';

const TopArtists = ({tracks}) => {
  // Extract unique artists
  const artists = tracks
    .reduce((acc, track) => {
      if (!acc.some(artist => artist.id === track.artist_id)) {
        acc.push({
          id: track.artist_id,
          name: track.artist_name,
          image: track.artist_image || track.image,
        });
      }
      return acc;
    }, [])
    .slice(0, 5);

  return (
    <FlatList
      horizontal
      data={artists}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.artistItem}>
          <Image
            source={{uri: item.image || 'https://via.placeholder.com/120'}}
            style={styles.artistImage}
          />
          <Text style={styles.artistName} numberOfLines={1}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  artistItem: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  artistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  artistName: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContent: {
    paddingRight: 15,
  },
});

export default TopArtists;
