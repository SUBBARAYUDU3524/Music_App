import React, {createContext, useState, useEffect, useRef} from 'react';
import Sound from 'react-native-sound';
import colors from '../config/colors';

export const AudioContext = createContext();

Sound.setCategory('Playback');

export const AudioProvider = ({children}) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const soundRef = useRef(null);
  const intervalRef = useRef(null);

  const loadTrack = (track, play = true) => {
    setIsLoading(true);
    setError(null);

    if (soundRef.current) {
      soundRef.current.release();
    }

    soundRef.current = new Sound(track.audio, null, error => {
      setIsLoading(false);
      if (error) {
        console.log('failed to load the sound', error);
        setError(error);
        return;
      }

      setCurrentTrack(track);
      setDuration(soundRef.current.getDuration());

      if (play) {
        playAudio();
      }
    });
  };

  const playAudio = () => {
    if (soundRef.current) {
      soundRef.current.play(success => {
        if (success) {
          console.log('successfully finished playing');
          playNext();
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
      setIsPlaying(true);
      startProgressTimer();
    }
  };

  const pauseAudio = () => {
    if (soundRef.current && isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
      clearInterval(intervalRef.current);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const playNext = () => {
    if (playlist?.length > 0) {
      const nextIndex = (currentIndex + 1) % playlist?.length;
      setCurrentIndex(nextIndex);
      loadTrack(playlist[nextIndex]);
    }
  };

  const playPrevious = () => {
    if (playlist?.length > 0) {
      const prevIndex =
        (currentIndex - 1 + playlist?.length) % playlist?.length;
      setCurrentIndex(prevIndex);
      loadTrack(playlist[prevIndex]);
    }
  };

  const seekTo = seconds => {
    if (soundRef.current) {
      soundRef.current.setCurrentTime(seconds);
      setCurrentTime(seconds);
    }
  };

  const setVolumeLevel = level => {
    setVolume(level);
    if (soundRef.current) {
      soundRef.current.setVolume(level);
    }
  };

  const startProgressTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (soundRef.current && soundRef.current.isLoaded() && isPlaying) {
        soundRef.current.getCurrentTime(seconds => {
          setCurrentTime(seconds);
        });
      }
    }, 1000);
  };

  const addToPlaylist = tracks => {
    setPlaylist(tracks);
  };

  const playTrackFromPlaylist = (track, index) => {
    setCurrentIndex(index);
    loadTrack(track);
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) {
        soundRef.current.release();
      }
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        duration,
        currentTime,
        volume,
        isLoading,
        error,
        playlist,
        loadTrack,
        playAudio,
        pauseAudio,
        togglePlayPause,
        playNext,
        playPrevious,
        seekTo,
        setVolume: setVolumeLevel,
        addToPlaylist,
        playTrackFromPlaylist,
      }}>
      {children}
    </AudioContext.Provider>
  );
};
