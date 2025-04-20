import React, {useContext} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import ProgressBar from '../Components/AudioPlayer/ProgressBar';
import colors from '../config/colors';
import Controls from '../Components/AudioPlayer/Controls';
import {AudioContext} from '../Context/AudioContext';

const PlayerScreen = () => {
  const {
    currentTrack,
    isPlaying,
    duration,
    currentTime,
    togglePlayPause,
    playNext,
    playPrevious,
    seekTo,
  } = useContext(AudioContext);

  if (!currentTrack) {
    return (
      <View style={styles.container}>
        <Text style={styles.noTrackText}>No track selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.artworkContainer}>
        <Image
          source={{
            uri: currentTrack.image || 'https://via.placeholder.com/300',
          }}
          style={styles.artwork}
        />
      </View>

      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle} numberOfLines={1}>
          {currentTrack.name}
        </Text>
        <Text style={styles.trackArtist} numberOfLines={1}>
          {currentTrack.artist_name}
        </Text>
      </View>

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSlidingComplete={seekTo}
      />

      <Controls
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        onNext={playNext}
        onPrevious={playPrevious}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    padding: 20,
  },
  noTrackText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
  artworkContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  artwork: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  trackInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  trackTitle: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    maxWidth: '90%',
  },
  trackArtist: {
    color: colors.secondaryLight,
    fontSize: 18,
    maxWidth: '90%',
  },
});

export default PlayerScreen;
