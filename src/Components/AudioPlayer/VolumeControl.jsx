import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const VolumeControl = ({volume, onVolumeChange}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="volume-low" size={24} color={colors.white} />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={onVolumeChange}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.secondaryLight}
        thumbTintColor={colors.primary}
      />
      <Ionicons name="volume-high" size={24} color={colors.white} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default VolumeControl;
