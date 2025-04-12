import React, {createContext, useState, useEffect} from 'react';

const MusicContext = createContext();

export const MusicProvider = ({children}) => {
  const [selectedSong, setSelectedSong] = useState(null);

  // Function to handle song selection
  const onSelectSong = song => {
    setSelectedSong(song);
  };

  return (
    <MusicContext.Provider
      value={{selectedSong, setSelectedSong, onSelectSong}}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContext;
