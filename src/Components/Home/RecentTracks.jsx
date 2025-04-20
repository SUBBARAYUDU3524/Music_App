import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import TrackItem from '../Track/TrackItem';
import colors from '../../config/colors';

const RecentTracks = ({tracks}) => {
  return (
    <FlatList
      data={tracks.slice(0, 5)}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => <TrackItem track={item} index={index} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: colors.secondaryDark,
    marginVertical: 5,
  },
});

export default RecentTracks;
