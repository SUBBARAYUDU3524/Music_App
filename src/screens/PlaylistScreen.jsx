import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {getPlaylistTracks} from '../services/api';
import PlaylistTracks from '../Components/Playlist/PlaylistTracks';
import colors from '../config/colors';
import {AudioContext} from '../Context/AudioContext';

const PlaylistScreen = ({route}) => {
  const {playlist, tracks: initialTracks} = route.params;
  const [tracks, setTracks] = useState(initialTracks || []);
  const [loading, setLoading] = useState(!initialTracks);
  const {addToPlaylist, playTrackFromPlaylist} = useContext(AudioContext);

  // Function to construct proper image URL
  const getPlaylistImageUrl = playlist => {
    // If image exists in response, use it
    if (playlist.image) return playlist.image;

    // Jamendo's standard image URL pattern for playlists
    if (playlist.id) {
      return `https://usercontent.jamendo.com?type=album&id=${playlist.id}&width=300`;
    }

    // Fallback placeholder
    return 'https://via.placeholder.com/300';
  };

  useEffect(() => {
    console.log('Current playlist data:', playlist); // Debug log
    const fetchPlaylistTracks = async () => {
      try {
        const playlistTracks = await getPlaylistTracks(playlist.id);
        setTracks(playlistTracks);
        addToPlaylist(playlistTracks);
      } catch (error) {
        console.error('Error fetching playlist tracks:', error);
      } finally {
        setLoading(false);
      }
    };

    if (!initialTracks && playlist.id) {
      fetchPlaylistTracks();
    }
  }, [playlist.id]);

  const handleTrackPress = (track, index) => {
    playTrackFromPlaylist(track, index);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading playlist...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: getPlaylistImageUrl(playlist)}}
          style={styles.playlistImage}
          onError={e => console.log('Image load error:', e.nativeEvent.error)}
        />
        <Text style={styles.playlistTitle}>{playlist.name}</Text>
        <Text style={styles.trackCount}>{tracks?.length} tracks</Text>
        <Text style={styles.creator}>
          By {playlist.user_name || 'Unknown artist'}
        </Text>
      </View>

      <PlaylistTracks tracks={tracks} onTrackPress={handleTrackPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
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
  header: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 10,
  },
  playlistImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: colors.secondaryDark, // Shows while loading
  },
  playlistTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  trackCount: {
    color: colors.secondaryLight,
    fontSize: 16,
    marginBottom: 5,
  },
  creator: {
    color: colors.secondaryLight,
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default PlaylistScreen;
