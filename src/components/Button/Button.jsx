import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({children , ...props}) => {
  const { size, ...others } = props;
  const className = `portfolio-button ${size}`;

  return (
    <button className={className} {...others}>
      { children }
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

Button.defaultProps = {
  size: 'sm'
}

export default Button;
