import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        Slash Flutter provides extraordinary flutter tutorials. Do Subscribe!
      </Text>
      <Image 
         source={require("../assets/welcome.jpg")}  

        style={styles.image} 
      />
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.signupButton} 
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 30,
  },
  loginButton: {
    width: "80%",
    padding: 15,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButton: {
    width: "80%",
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 30,
    alignItems: "center",
  },
  signupText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
