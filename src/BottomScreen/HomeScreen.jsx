import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Quizzo</Text>
        <View style={styles.headerIcons}>
          <Icon name="search" size={22} color="#000" style={styles.icon} />
          <Icon name="bell" size={22} color="#000" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner Section */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Play quiz together with your friends now!
          </Text>
          <TouchableOpacity style={styles.findButton}>
            <Text style={styles.findButtonText}>Find Friends</Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/welcome.jpg')}
            style={styles.bannerImage}
          />
        </View>

        {/* Discover Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cardScroll}>
          <View style={styles.card}>
            <Image
              source={require('../assets/Login.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>
              Get Smarter with Productivity Quizzes
            </Text>
            <Text style={styles.cardSubText}>16 Qs</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={require('../assets/Login.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>
              Great Ideas Come from Brilliant Minds
            </Text>
            <Text style={styles.cardSubText}>10 Qs</Text>
          </View>
        </ScrollView>

        {/* Top Authors */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Authors</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.authorScroll}>
          <View style={styles.author}>
            <Image
              source={require('../assets/Login.jpg')}
              style={styles.authorImage}
            />
            <Text style={styles.authorName}>Rayford</Text>
          </View>
          <View style={styles.author}>
            <Image
              source={require('../assets/Login.jpg')}
              style={styles.authorImage}
            />
            <Text style={styles.authorName}>Willard</Text>
          </View>
          <View style={styles.author}>
            <Image
              source={require('../assets/Login.jpg')}
              style={styles.authorImage}
            />
            <Text style={styles.authorName}>Hannah</Text>
          </View>
          <View style={styles.author}>
            <Image
              source={require('../assets/Login.jpg')}
              style={styles.authorImage}
            />
            <Text style={styles.authorName}>Geoffrey</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

// **💜 STYLES 💜**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF', // Light lavender background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6F56FF',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  banner: {
    margin: 20,
    padding: 20,
    backgroundColor: '#6F56FF', // Solid purple background
    borderRadius: 20,
    position: 'relative',
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    width: '60%',
  },
  findButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  findButtonText: {
    color: '#6F56FF',
    fontWeight: 'bold',
  },
  bannerImage: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#6F56FF',
    fontWeight: 'bold',
  },
  cardScroll: {
    marginTop: 10,
    paddingLeft: 20,
  },
  card: {
    width: 180,
    backgroundColor: '#fff',
    marginRight: 15,
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  cardSubText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  authorScroll: {
    marginTop: 10,
    paddingLeft: 20,
  },
  author: {
    alignItems: 'center',
    marginRight: 15,
  },
  authorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#6F56FF',
  },
  authorName: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
