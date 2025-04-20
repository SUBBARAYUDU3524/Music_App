import React, {useState, useContext} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Keyboard,
  Text,
} from 'react-native';
import colors from '../config/colors';
import {searchTracks} from '../services/api';
import {AudioContext} from '../Context/AudioContext';
import TrackItem from '../Components/Track/TrackItem';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const {playTrackFromPlaylist, addToPlaylist} = useContext(AudioContext);

  const handleSearch = async () => {
    if (!query.trim()) return;

    Keyboard.dismiss();
    setLoading(true);

    try {
      const tracks = await searchTracks(query);
      setResults(tracks);
      addToPlaylist(tracks);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for songs, artists..."
        placeholderTextColor={colors.secondaryLight}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />

      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Searching...</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TrackItem
              track={item}
              onPress={() => playTrackFromPlaylist(item, index)}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                {query ? 'No results found' : 'Search for music'}
              </Text>
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15,
  },
  searchInput: {
    backgroundColor: colors.secondaryDark,
    color: colors.white,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: colors.white,
    fontSize: 16,
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

export default SearchScreen;
