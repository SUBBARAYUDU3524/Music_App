import axios from 'axios';
import constants from '../config/constants';

const API_URL = constants.JAMENDO_API_URL;
const CLIENT_ID = constants.JAMENDO_CLIENT_ID;

export const getFeaturedPlaylists = async () => {
  try {
    const response = await axios.get(`${API_URL}/playlists`, {
      params: {
        client_id: CLIENT_ID,
        format: 'json',
        // search: 'telugu',
        limit: 10,
        imagesize: 300,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching featured playlists:', error);
    throw error;
  }
};

export const getPlaylistTracks = async playlistId => {
  try {
    const response = await axios.get(`${API_URL}/playlists/tracks`, {
      params: {
        client_id: CLIENT_ID,
        format: 'json',
        // search: 'telugu',
        id: playlistId,
      },
    });
    return response.data.results[0].tracks;
  } catch (error) {
    console.error('Error fetching playlist tracks:', error);
    throw error;
  }
};

export const searchTracks = async query => {
  try {
    const response = await axios.get(`${API_URL}/tracks`, {
      params: {
        client_id: CLIENT_ID,
        format: 'json',
        // search: 'telugu',
        search: query,
        limit: 20,
        imagesize: 300,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
};

export const getPopularTracks = async () => {
  try {
    const response = await axios.get(`${API_URL}/tracks`, {
      params: {
        client_id: CLIENT_ID,
        format: 'json',
        // search: 'telugu',
        limit: 20,
        order: 'popularity_total',
        imagesize: 300,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular tracks:', error);
    throw error;
  }
};

export const getArtistInfo = async artistId => {
  try {
    const response = await axios.get(`${API_URL}/artists`, {
      params: {
        client_id: CLIENT_ID,
        format: 'json',
        id: artistId,
        imagesize: 300,
      },
    });
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching artist info:', error);
    throw error;
  }
};
