import React from 'react';
import PropTypes from 'prop-types';
import './Frame.css';

const Frame = ({children , ...props}) => {
  const { variant, ...others } = props;
  const className = `portfolio-frame ${variant}`;
  const childrenClassName = `portfolio-frame-child`;

  return (
    <div className={className}>
      <div className={childrenClassName}>{children}</div>
    </div>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['outlined']),
}

Frame.defaultProps = {
  variant: 'outlined'
}

export default Frame;
