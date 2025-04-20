import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../config/colors';

const Controls = ({
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  disabled = false,
}) => {
  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity
        onPress={onPrevious}
        disabled={disabled}
        style={[styles.controlButton, disabled && styles.disabledButton]}>
        <Ionicons
          name="play-skip-back"
          size={30}
          color={disabled ? colors.secondary : colors.white}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onPlayPause}
        disabled={disabled}
        style={[styles.playButton, disabled && styles.disabledButton]}>
        <Ionicons
          name={isPlaying ? 'pause' : 'play'}
          size={40}
          color={disabled ? colors.secondary : colors.white}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onNext}
        disabled={disabled}
        style={[styles.controlButton, disabled && styles.disabledButton]}>
        <Ionicons
          name="play-skip-forward"
          size={30}
          color={disabled ? colors.secondary : colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  controlButton: {
    marginHorizontal: 20,
  },
  playButton: {
    backgroundColor: colors.primary,
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    elevation: 5,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default Controls;
