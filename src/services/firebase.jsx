import constants from '../config/constants';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// Initialize Firebase if not already initialized
if (!firestore().apps?.length) {
  firestore().settings({
    persistence: true,
    cacheSizeBytes: firestore.CACHE_SIZE_UNLIMITED,
  });
}

/**
 * Signs in a user anonymously
 * @returns {Promise<void>}
 */
export const signInAnonymously = async () => {
  try {
    await auth().signInAnonymously();
    console.log('User signed in anonymously');
  } catch (error) {
    console.error('Anonymous sign-in failed:', error);
    throw error;
  }
};

/**
 * Gets the current user ID
 * @returns {string|null}
 */
const getUserId = () => {
  const user = auth().currentUser;
  return user ? user.uid : null;
};

/**
 * Saves a track to user's favorites
 * @param {object} track - The track to save
 * @returns {Promise<void>}
 */
export const saveFavoriteTrack = async track => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('User not authenticated');
    }

    await firestore()
      .collection('users')
      .doc(userId)
      .collection('favorites')
      .doc(track.id)
      .set({
        ...track,
        savedAt: firestore.FieldValue.serverTimestamp(),
      });

    console.log('Track saved to favorites:', track.id);
  } catch (error) {
    console.error('Error saving favorite track:', error);
    throw error;
  }
};

/**
 * Gets all favorite tracks for the current user
 * @returns {Promise<Array>} - Array of favorite tracks
 */
export const getFavoriteTracks = async () => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('User not authenticated');
    }

    const snapshot = await firestore()
      .collection('users')
      .doc(userId)
      .collection('favorites')
      .orderBy('savedAt', 'desc')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error getting favorite tracks:', error);
    throw error;
  }
};

/**
 * Removes a track from user's favorites
 * @param {string} trackId - The ID of the track to remove
 * @returns {Promise<void>}
 */
export const removeFavoriteTrack = async trackId => {
  try {
    const userId = getUserId();
    if (!userId) {
      throw new Error('User not authenticated');
    }

    await firestore()
      .collection('users')
      .doc(userId)
      .collection('favorites')
      .doc(trackId)
      .delete();

    console.log('Track removed from favorites:', trackId);
  } catch (error) {
    console.error('Error removing favorite track:', error);
    throw error;
  }
};

/**
 * Checks if a track is in user's favorites
 * @param {string} trackId - The ID of the track to check
 * @returns {Promise<boolean>}
 */
export const isTrackFavorite = async trackId => {
  try {
    const userId = getUserId();
    if (!userId) return false;

    const doc = await firestore()
      .collection('users')
      .doc(userId)
      .collection('favorites')
      .doc(trackId)
      .get();

    return doc.exists;
  } catch (error) {
    console.error('Error checking favorite track:', error);
    return false;
  }
};

/**
 * Toggles a track's favorite status
 * @param {object} track - The track to toggle
 * @returns {Promise<boolean>} - New favorite status (true if added, false if removed)
 */
export const toggleFavoriteTrack = async track => {
  try {
    const isFavorite = await isTrackFavorite(track.id);
    if (isFavorite) {
      await removeFavoriteTrack(track.id);
      return false;
    } else {
      await saveFavoriteTrack(track);
      return true;
    }
  } catch (error) {
    console.error('Error toggling favorite track:', error);
    throw error;
  }
};
