import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const PlaylistItem = ({playlist, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{uri: playlist.image || 'https://via.placeholder.com/60'}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {playlist.name}
        </Text>
        <Text style={styles.trackCount} numberOfLines={1}>
          {playlist.track_count || 0} tracks
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 5,
  },
  trackCount: {
    color: colors.secondaryLight,
    fontSize: 14,
  },
});

export default PlaylistItem;
