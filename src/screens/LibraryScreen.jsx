import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {AudioContext} from '../Context/AudioContext';
import PlaylistItem from '../Components/Playlist/PlaylistItem';
import colors from '../config/colors';
import {getFavoriteTracks} from '../services/firebase';
import {auth} from '@react-native-firebase/auth';

const LibraryScreen = ({navigation}) => {
  const [favorites, setFavorites] = useState([]);
  const {playlist} = useContext(AudioContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const user = auth()?.currentUser;
        if (user) {
          const favs = await getFavoriteTracks(user.uid);
          setFavorites(favs);
        }
      } catch (error) {
        console.error('Error fetching favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading your library...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your Playlists</Text>
      <FlatList
        data={[
          {
            id: 'recent',
            name: 'Recently Played',
            image: 'https://via.placeholder.com/150',
            track_count: playlist?.length,
          },
        ]}
        renderItem={({item}) => (
          <PlaylistItem
            playlist={item}
            onPress={() =>
              navigation.navigate('Playlist', {
                playlist: item,
                tracks: playlist,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Text style={styles.sectionTitle}>Favorite Tracks</Text>
      <FlatList
        data={favorites}
        renderItem={({item}) => (
          <PlaylistItem
            playlist={{
              id: item.id,
              name: item.name,
              image: item.image,
              track_count: 1,
            }}
            onPress={() =>
              navigation.navigate('Playlist', {
                playlist: {
                  id: 'favorites',
                  name: 'Favorite Tracks',
                  image: 'https://via.placeholder.com/150',
                },
                tracks: favorites,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No favorite tracks yet</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  loadingText: {
    color: colors.white,
    fontSize: 18,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  separator: {
    height: 1,
    backgroundColor: colors.secondaryDark,
    marginVertical: 5,
  },
  emptyText: {
    color: colors.secondaryLight,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LibraryScreen;
