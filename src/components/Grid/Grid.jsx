import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({children , ...props}) => {
  const { variant, ...others } = props;
  const className = `portfolio-grid portfolio-grid-${variant}`;

  return (
    <div className={className}>
      { children }
    </div>
  );
}

Grid.propTypes = {
  children: PropTypes.node,
  // variant: PropTypes.oneOf(['outlined']),
}

Grid.defaultProps = {
  // variant: 'outlined'
}

export default Grid;
