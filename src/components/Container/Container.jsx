import React from 'react';
import useScreenType from '../../hooks/useScreenType'
import './Container.css'

const Container = ({ children, ...others}) => {

  const screenType = useScreenType()
  const className = `portfolio-container`;

  return (
    <div {...others} className={className}>
      { (typeof children === 'function') ? children(screenType) : children }
    </div>
  );
}

export default Container;
