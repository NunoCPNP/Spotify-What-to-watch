/* eslint class-methods-use-this: 0 */
/* eslint react/no-unused-state: 0 */
import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './components/login/Login';
import InitialData from './components/spotifydata/InitialData';

import { getHashParams } from './utilities/utilities';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor() {
    super();
    const params = getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: !!token,
      user: {
        name: '',
        image: ''
      },
      topArtists: [],
      artistsArray: []
    };
  }

  async componentDidMount() {
    await this.getMe();
    await this.getMyTopArtists();
  }

  getMe() {
    spotifyApi.getMe().then(response => {
      this.setState({
        user: {
          name: response.display_name,
          image: response.images[0].url
        }
      });
    });
  }

  getMyTopArtists() {
    spotifyApi.getMyTopArtists().then(response => {
      this.setState({
        topArtists: response.items
      });

      const responseArray = [];
      response.items.forEach(item => {
        responseArray.push(item.name.split(' ').join('-'));
      });

      this.setState({ artistsArray: responseArray });
    });
  }

  render() {
    const { loggedIn, topArtists, user, artistsArray } = this.state;

    return (
      <>
        {!loggedIn && <Login />}
        {loggedIn && (
          <>
            <InitialData
              artistsData={topArtists}
              loggedIn={loggedIn}
              userData={user}
              artists={artistsArray}
            />
          </>
        )}
      </>
    );
  }
}

export default App;
