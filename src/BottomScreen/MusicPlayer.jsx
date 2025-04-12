import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

let sound;

const MusicPlayer = ({song, onBack}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    Sound.setCategory('Playback');

    sound = new Sound(song.file, null, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      sound.play(() => {
        sound.release();
      });
      setIsPlaying(true);
    });

    return () => {
      if (sound) {
        sound.stop(() => sound.release());
      }
    };
  }, [song]);

  const togglePlayback = () => {
    if (isPlaying) {
      sound.pause();
      setIsPlaying(false);
    } else {
      sound.play();
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Now Playing</Text>
      <Text style={styles.songTitle}>{song.title}</Text>
      <View style={styles.buttons}>
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlayback} />
        <Button title="Back" onPress={onBack} />
      </View>
    </View>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {fontSize: 22, fontWeight: 'bold', marginBottom: 15},
  songTitle: {fontSize: 20, marginBottom: 30},
  buttons: {flexDirection: 'row', gap: 15},
});
