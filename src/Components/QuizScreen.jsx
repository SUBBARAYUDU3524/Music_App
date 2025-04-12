import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const QuizScreen = ({ navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timer, setTimer] = useState(30);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
      question: "How many students in your class _ from Korea?",
      options: ["come", "comes", "are coming", "came"],
      correct: "come",
    },
  ];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleNext = () => {
    setSelectedAnswer(null);
    setTimer(30);
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="tune" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Timer & Progress */}
      <View style={styles.timerContainer}>
        <Text style={styles.scoreCount}>05</Text>
        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>{timer}</Text>
        </View>
        <Text style={styles.scoreCount}>07</Text>
      </View>

      {/* Question */}
      <View style={styles.questionBox}>
        <Text style={styles.questionCount}>Question 13/20</Text>
        <Text style={styles.questionText}>{questions[questionIndex].question}</Text>
      </View>

      {/* Answer Options */}
      <View style={styles.optionsContainer}>
        {questions[questionIndex].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOption,
              selectedAnswer !== null &&
                option === questions[questionIndex].correct &&
                styles.correctOption,
              selectedAnswer !== null &&
                selectedAnswer === option &&
                option !== questions[questionIndex].correct &&
                styles.wrongOption,
            ]}
            onPress={() => setSelectedAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
            {selectedAnswer !== null && option === questions[questionIndex].correct && (
              <Ionicons name="checkmark-circle" size={24} color="white" />
            )}
            {selectedAnswer !== null &&
              selectedAnswer === option &&
              option !== questions[questionIndex].correct && (
                <Ionicons name="close-circle" size={24} color="white" />
              )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={handleNext}>
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F7FC",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#8226DB",
  },
  iconButton: {
    padding: 10,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8226DB",
    height: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    marginBottom: 20,
  },
  timerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  timerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6C3483",
  },
  scoreCount: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  questionBox: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
    elevation: 5,
  },
  questionCount: {
    fontSize: 14,
    color: "#9B59B6",
    fontWeight: "bold",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  optionsContainer: {
    width: "85%",
    marginTop: 20,
  },
  optionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedOption: {
    borderColor: "#9B59B6",
  },
  correctOption: {
    backgroundColor: "#27AE60",
    borderColor: "#27AE60",
  },
  wrongOption: {
    backgroundColor: "#E74C3C",
    borderColor: "#E74C3C",
  },
  bottomButtons: {
    flexDirection: "row",
    width: "85%",
    justifyContent: "space-between",
    marginTop: 30,
  },
  navButton: {
    backgroundColor: "#D1C4E9",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6A1B9A",
  },
  submitButton: {
    backgroundColor: "#8226DB",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
