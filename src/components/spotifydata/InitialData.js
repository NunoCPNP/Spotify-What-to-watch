import React from 'react';

import Login from '../login/Login';
import GreenBar from '../../elements/GreenBar';
import TopArtists from './TopArtists';
import Main from '../functionality/Main';

const InitialData = props => {
  const { loggedIn, artistsData, userData, artists } = props;

  return (
    <>
      {!loggedIn && <Login />}
      {loggedIn && (
        <>
          <GreenBar />
          <div className="home-layout">
            <div className="u-pt-6 home-layout__spotify">
              <TopArtists top={artistsData} />
            </div>
            <div className="home-layout__data">
              <Main artists={artists} />
            </div>
          </div>
          <div className="user-data">
            <img src={userData.image} alt="User Profile" />
            <h1>{userData.name}</h1>
          </div>
        </>
      )}
    </>
  );
};

export default InitialData;
