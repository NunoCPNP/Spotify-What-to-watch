import React, { Component } from "react";
import _ from "lodash";

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }
  
  getMovies = () => {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  
    this.props.artists.forEach(artist => {
      fetch(proxyurl + `https://www.tunefind.com/api/frontend/artist/${artist}?fields=appearances`)
        .then(response => response.json())
        .then(contents => contents.appearances.forEach((item) => {
          (this.setState({ movies: [...this.state.movies, item.song_events[0].event.event_group.name] }));
        }))
        .then(filter => this.setState({ movies: _.uniq(this.state.movies)}))
        .catch(() => console.log(`Can’t access response. No movies or series with this artist !!`));
    })
  };

  componentDidUpdate(prevProps) {
    if (prevProps.artists !== this.props.artists) {
      this.getMovies();
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Main;


