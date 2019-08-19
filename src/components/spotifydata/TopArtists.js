import React, { Component } from 'react';

import TopArtist from './TopArtist';

class TopArtists extends Component {
  render() {
    return this.props.top.map(artist => (
      <TopArtist key={artist.id} artist={artist} />
    ));
  }
}

export default TopArtists;
