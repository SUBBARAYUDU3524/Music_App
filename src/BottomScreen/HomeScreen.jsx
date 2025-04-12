import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import MusicContext from '../Context/MusicContext';

const songsData = [
  {
    id: '1',
    title: 'Calm Vibes',
    file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: '2',
    title: 'Energy Boost',
    file: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];

const HomeScreen = () => {
  const {onSelectSong} = useContext(MusicContext);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Song List</Text>
      <FlatList
        data={songsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.songItem}
            onPress={() => onSelectSong(item)}>
            <Text style={styles.songText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {padding: 20, flex: 1},
  heading: {fontSize: 24, fontWeight: 'bold', marginBottom: 15},
  songItem: {
    backgroundColor: '#eee',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  songText: {fontSize: 18},
});
