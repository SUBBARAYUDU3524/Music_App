import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';
import colors from '../../config/colors';

const Loading = ({size = 'large', text = 'Loading...'}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  text: {
    color: colors.white,
    marginTop: 10,
  },
});

export default Loading;
