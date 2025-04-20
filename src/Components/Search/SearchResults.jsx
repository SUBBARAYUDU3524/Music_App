import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import TrackItem from '../Track/TrackItem';
import colors from '../../config/colors';

const SearchResults = ({results, onTrackPress, loading}) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Searching...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={results}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => (
        <TrackItem track={item} onPress={() => onTrackPress(item, index)} />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      contentContainerStyle={styles.listContent}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            {results.length === 0 ? 'No results found' : 'Search for music'}
          </Text>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: colors.white,
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: colors.secondaryDark,
    marginVertical: 5,
  },
  listContent: {
    paddingBottom: 80,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors.secondaryLight,
    fontSize: 16,
  },
});

export default SearchResults;
