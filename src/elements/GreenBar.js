import React from 'react';
import { useSpring, animated } from 'react-spring';

const GreenBar = () => {
  const slide = useSpring({
    from: { transform: 'translate3d(-800px, 0, 0)' },
    transform: 'translate3d(0, 0, 0)'
  });

  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 500
  });

  return (
    <>
      <animated.div className="green-block" style={slide} />
      <animated.div className="green-block__text" style={fade}>
        <h2>Your Spotify Top Artists</h2>
      </animated.div>
    </>
  );
};

export default GreenBar;
