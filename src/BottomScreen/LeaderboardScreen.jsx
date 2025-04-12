import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const leaderboardData = [
  { id: 1, name: "Anna D.", points: 832, image: require("../assets/rohit.jpg"), rank: 1 },
  { id: 2, name: "Mike L.", points: 640, image: require("../assets/rohit.jpg"), rank: 2 },
  { id: 3, name: "Joe H.", points: 599, image: require("../assets/rohit.jpg"), rank: 3 },
  { id: 4, name: "Lea L.", points: 530, image: require("../assets/rohit.jpg"), rank: 4, trend: "down" },
  { id: 5, name: "You", points: 420, image: require("../assets/rohit.jpg"), rank: 5, trend: "up" },
  { id: 6, name: "Sebastian M.", points: 410, image: require("../assets/rohit.jpg"), rank: 6, trend: "up" },
  { id: 7, name: "Garfielda C.", points: 390, image: require("../assets/rohit.jpg"), rank: 7, trend: "down" },
];

const LeaderboardScreen = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.rankItem, item.name === "You" && styles.highlightedRank]}>
      <Image source={item.image} style={styles.avatar} />  
      <Text style={styles.rank}>#{item.rank}</Text>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.points}>{item.points} points</Text>
      {item.trend && (
        <Text style={item.trend === "up" ? styles.trendUp : styles.trendDown}>
          {item.trend === "up" ? "⬆" : "⬇"}
        </Text>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <Text style={styles.subTitle}>This week</Text>

      <View style={styles.topThreeContainer}>
        {leaderboardData.slice(0, 3).map((item) => (
          <View key={item.id} style={[styles.topThreeCard, item.rank === 1 && styles.firstPlace]}>
            <Image source={item.image} style={styles.topAvatar} />
            <Text style={styles.topRank}>#{item.rank}</Text>
            <Text style={styles.topName}>{item.name}</Text>
            <Text style={styles.topPoints}>{item.points} points</Text>
          </View>
        ))}
      </View>

      <FlatList
        data={leaderboardData.slice(3)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#222",
  },
  subTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  topThreeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  topThreeCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowOpacity: 0.1,
    elevation: 3,
  },
  firstPlace: {
    transform: [{ scale: 1.1 }],
  },
  topAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  topRank: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },
  topName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  topPoints: {
    fontSize: 14,
    color: "#777",
  },
  rankItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    shadowOpacity: 0.05,
    elevation: 2,
  },
  highlightedRank: {
    borderWidth: 2,
    borderColor: "#007BFF",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rank: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
  },
  points: {
    fontSize: 14,
    color: "#777",
  },
  trendUp: {
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
  trendDown: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});
