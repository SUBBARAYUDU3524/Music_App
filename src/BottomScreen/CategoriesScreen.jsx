import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const categories = [
  { id: 1, name: "Sports", questions: 50, icon: require("../assets/rohit.jpg") },
  { id: 2, name: "Chemistry", questions: 30, icon: require("../assets/rohit.jpg") },
  { id: 3, name: "Math", questions: 95, icon: require("../assets/rohit.jpg") },
  { id: 4, name: "History", questions: 128, icon: require("../assets/rohit.jpg") },
//   { id: 5, name: "Biological", questions: 60, icon: require("../assets/biology.png") },
//   { id: 6, name: "Geography", questions: 40, icon: require("../assets/geography.png") },
];

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      {/* User Info */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, John</Text>
          <Text style={styles.subtitle}>Let's make this day productive</Text>
        </View>
        <Image source={require("../assets/welcome.jpg")} style={styles.avatar} />
      </View>

      {/* Ranking & Points */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Icon name="trophy" size={20} color="#FFA500" />
          <Text style={styles.statText}>Ranking</Text>
          <Text style={styles.statValue}>348</Text>
        </View>
        <View style={styles.statBox}>
          <Icon name="coins" size={20} color="#FFD700" />
          <Text style={styles.statText}>Points</Text>
          <Text style={styles.statValue}>1209</Text>
        </View>
      </View>

      {/* Category List */}
      <Text style={styles.sectionTitle}>Let's play</Text>
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.questions} questions</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FA",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3,
  },
  statBox: {
    alignItems: "center",
  },
  statText: {
    fontSize: 14,
    color: "#777",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#777",
  },
});

export default CategoriesScreen;
