import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromUrl } from './services/spotify';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import './App.css';
import { useStateValue } from './context/context';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        // dispatch action to context api / state mgmt
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })
    }
  }, []);

  return (
    <div className="app">
      { token ? <Player spotify={spotify} /> : <Login /> }
    </div>
  );
}

export default App;
