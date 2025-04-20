import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: colors.secondaryDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGray,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
