import React from 'react';
import {View, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const Card = ({children, style}) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.secondaryDark,
    borderRadius: 8,
    padding: 15,
    marginVertical: 5,
    elevation: 2,
  },
});

export default Card;
