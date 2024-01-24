import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Gravatar.css'

const GRAVATAR_FALLBACK = ['mp', 'identicon', 'monsterid', 'wavatar', 'retro', 'robohash'];

const Gravatar = ({ hash, size, variant, fallbackGravatar, ...others}) => {
  const className = `portfolio-gravatar ${variant}`;
  const [gravatarFallback, setGravatarFallback] = useState(fallbackGravatar);

  useEffect(() => {
    if(fallbackGravatar === 'random') setGravatarFallback(GRAVATAR_FALLBACK[Math.floor(Math.random() * GRAVATAR_FALLBACK.length)])
  }, [fallbackGravatar]);

  return (
    <div className={className}>
      <img 
        src={`https://www.gravatar.com/avatar/${hash}?&s=${size}6&d=${gravatarFallback}`} 
        width={size} 
        height={size} 
        className='portfolio-gravatar-image' 
      />
    </div>
  );
}

Gravatar.propTypes = {
  size: PropTypes.number.isRequired,
  fallbackGravatar: PropTypes.oneOf([...GRAVATAR_FALLBACK, 'random'])
}

Gravatar.defaultProps = {
  size: 50,
  fallbackGravatar: 'random',
  variant: 'outlined-circle'
}

export default Gravatar;
