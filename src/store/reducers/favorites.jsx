const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_FAVORITES_SUCCESS':
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_FAVORITES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
