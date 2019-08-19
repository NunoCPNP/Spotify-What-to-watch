import React from 'react';

import logo from '../../assets/Spotify_Icon_RGB_Green.png';

const Login = () => (
  <div className="login-screen">
    <img src={logo} alt="" style={{ width: '200px' }} />
    <div className="login-screen__text">
      <h3>You need to be logged in on your Spotify Account</h3>
      <a
        className="btn btn-white"
        href="https://bagged-marks-64405.herokuapp.com/"
      >
        Login to Spotify
      </a>
    </div>
  </div>
);

export default Login;
