import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const SearchBar = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={colors.secondaryLight} />
      <TextInput
        style={styles.input}
        placeholder="Search for songs, artists..."
        placeholderTextColor={colors.secondaryLight}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondaryDark,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: colors.white,
    padding: 10,
    fontSize: 16,
  },
});

export default SearchBar;
