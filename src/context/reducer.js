export const initialState = {
  user: null,
  token: null,
  // token: 'BQByw13AsvJpsutW4qmsyRjt3UrYbiIG7DKUnN_cwInicXBvEGHG9rQiM60SO5hWKRgCRRNEriOlJ-O-EK58y97VIu_RHg0rGY60C5FbbZBSqYdxlFp6eHJCyXr9wnZOH3nQn6Yqcz1H3v_5tMuQBwHvbPaArZ-0',
  playlists: [],
  playing: false,
  item: null
}

const reducer = (state, action) => {
  // console.log(action);
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    default:
      return state;
  }
}

export default reducer;