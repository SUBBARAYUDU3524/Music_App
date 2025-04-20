import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import TrackItem from '../Track/TrackItem';
import colors from '../../config/colors';

const PlaylistTracks = ({tracks, onTrackPress}) => {
  return (
    <FlatList
      data={tracks}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <TrackItem track={item} onPress={() => onTrackPress(item, index)} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.secondaryDark,
    marginVertical: 5,
  },
  listContent: {
    paddingBottom: 80,
  },
});

export default PlaylistTracks;
