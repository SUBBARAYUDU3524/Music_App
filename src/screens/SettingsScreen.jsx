import React, {useContext} from 'react';
import {View, Switch, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../Context/ThemeContext';
import colors from '../config/colors';

const SettingsScreen = () => {
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? colors.black : colors.white},
      ]}>
      <View style={styles.settingItem}>
        <Text
          style={[
            styles.settingText,
            {color: isDarkMode ? colors.white : colors.black},
          ]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          trackColor={{false: colors.secondaryLight, true: colors.primary}}
          thumbColor={isDarkMode ? colors.primary : colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryLight,
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
