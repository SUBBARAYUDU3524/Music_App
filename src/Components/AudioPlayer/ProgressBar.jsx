import React from 'react';
import {View, Text, Slider, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const ProgressBar = ({
  currentTime,
  duration,
  onSlidingComplete,
  disabled = false,
}) => {
  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor={colors.primary}
        maximumTrackTintColor={colors.secondaryLight}
        thumbTintColor={colors.primary}
        disabled={disabled}
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
        <Text style={styles.timeText}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  timeText: {
    color: colors.white,
    fontSize: 12,
  },
});

export default ProgressBar;
