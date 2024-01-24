import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const GRAVATAR_FALLBACK = ['mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash'];

const Gravatar = (props) => {
  const { hash, size, classList = '', fallbackGravatar, ...others} = props;
  const [gravatarFallback, setGravatarFallback] = useState(fallbackGravatar);

  const className = `${classList}`;

  useEffect(() => {
    if(fallbackGravatar === 'random') setGravatarFallback(GRAVATAR_FALLBACK[Math.floor(Math.random() * GRAVATAR_FALLBACK.length)])
  }, [fallbackGravatar]);

  return (
      <img 
        src={`https://www.gravatar.com/avatar/${hash}?&s=${size}6&d=${gravatarFallback}`} 
        width={size} 
        height={size} 
      />
  );
}

Gravatar.propTypes = {
  size: PropTypes.number.isRequired,
  fallbackGravatar: PropTypes.oneOf([...GRAVATAR_FALLBACK, 'random'])
}

Gravatar.defaultProps = {
  size: 50,
  fallbackGravatar: 'random',
}

export default Gravatar;
