import React from 'react'
import { loginUrl } from '../../services/spotify';
import './Login.css';

const Login = () => {
  return (
    <div className="login">

      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Spotify_logo_horizontal_black.jpg/1280px-Spotify_logo_horizontal_black.jpg" alt="Spotify React App" />

      <a href={loginUrl}>Login with Spotify</a>
      
    </div>
  )
}

export default Login
