// Auth Actions
export const loginRequest = () => ({type: 'LOGIN_REQUEST'});
export const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFailure = error => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});
export const logout = () => ({type: 'LOGOUT'});

// Async action for anonymous login
export const anonymousLogin = () => {
  return async dispatch => {
    dispatch(loginRequest());
    try {
      const {signInAnonymously} = await import('../services/firebase');
      await signInAnonymously();
      const user = auth().currentUser;
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};

// Favorites Actions
export const fetchFavoritesRequest = () => ({type: 'FETCH_FAVORITES_REQUEST'});
export const fetchFavoritesSuccess = tracks => ({
  type: 'FETCH_FAVORITES_SUCCESS',
  payload: tracks,
});
export const fetchFavoritesFailure = error => ({
  type: 'FETCH_FAVORITES_FAILURE',
  payload: error,
});

// Async action to fetch favorites
export const fetchFavorites = () => {
  return async dispatch => {
    dispatch(fetchFavoritesRequest());
    try {
      const {getFavoriteTracks} = await import('../services/firebase');
      const tracks = await getFavoriteTracks();
      dispatch(fetchFavoritesSuccess(tracks));
    } catch (error) {
      dispatch(fetchFavoritesFailure(error.message));
    }
  };
};

export const toggleFavorite = track => {
  return async dispatch => {
    try {
      const {isTrackFavorite, saveFavoriteTrack, removeFavoriteTrack} =
        await import('../services/firebase');

      const isFavorite = await isTrackFavorite(track.id);

      if (isFavorite) {
        await removeFavoriteTrack(track.id);
        dispatch({
          type: 'REMOVE_FAVORITE',
          payload: track.id,
        });
      } else {
        await saveFavoriteTrack(track);
        dispatch({
          type: 'ADD_FAVORITE',
          payload: track,
        });
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };
};
