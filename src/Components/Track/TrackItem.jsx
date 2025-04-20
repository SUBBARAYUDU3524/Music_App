import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const TrackItem = ({track, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={{uri: track.image || 'https://via.placeholder.com/60'}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {track.name}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {track.artist_name}
        </Text>
      </View>
      <Ionicons
        name="ellipsis-vertical"
        size={20}
        color={colors.secondaryLight}
        style={styles.moreIcon}
      />
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
  artist: {
    color: colors.secondaryLight,
    fontSize: 14,
  },
  moreIcon: {
    marginLeft: 10,
  },
});

export default TrackItem;
