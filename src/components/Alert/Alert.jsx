import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({children , ...props}) => {
  const { variant, ...others } = props;
  const className = `portfolio-alert ${variant}`;

  return (
    <span className={className}>{children}</span>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['outlined']),
}

Alert.defaultProps = {
  variant: 'outlined'
}

export default Alert;
