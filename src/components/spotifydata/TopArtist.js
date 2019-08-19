import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { MdInfoOutline } from 'react-icons/md';

const TopArtist = props => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 1100
  });

  return (
    <animated.div className="artist-data" style={fade}>
      <img src={props.artist.images[2].url} alt="" />
      <div className="artist-data__wrapper">
        <h3>{props.artist.name}</h3>
        <h5>
          {props.artist.genres[0]}
          <span> </span>
          {props.artist.genres[1]}
          <span> </span>
          {props.artist.genres[2]}
        </h5>
      </div>
      <Icon />
    </animated.div>
  );
};

export default TopArtist;

const Icon = styled(MdInfoOutline)`
  grid-column: 3 / 4;
  align-self: center;
  color: #ffffff;
  height: 1.8em;
  width: 1.8em;
`;
