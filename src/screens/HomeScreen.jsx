import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {getFeaturedPlaylists, getPopularTracks} from '../services/api';

import colors from '../config/colors';
import FeaturedPlaylists from '../Components/Home/FeaturedPlaylists';
import {AudioContext} from '../Context/AudioContext';
import RecentTracks from '../Components/Home/RecentTracks';
import TopArtists from '../Components/Home/TopArtists';

const HomeScreen = ({navigation}) => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [popularTracks, setPopularTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const {addToPlaylist} = useContext(AudioContext);

  console.log(featuredPlaylists, popularTracks);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [playlists, tracks] = await Promise.all([
          getFeaturedPlaylists(),
          getPopularTracks(),
        ]);
        setFeaturedPlaylists(playlists);
        setPopularTracks(tracks);
        addToPlaylist(tracks);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Playlists</Text>
          <FeaturedPlaylists
            playlists={featuredPlaylists}
            navigation={navigation}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Tracks</Text>
          <RecentTracks tracks={popularTracks} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Artists</Text>
          <TopArtists tracks={popularTracks} />
        </View>
      </ScrollView>
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
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default HomeScreen;
