import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const Text = (props) => {
  const { variant, children } = props;
  const className = `portfolio-text ${variant}`;

  return (
    <div className={className}>{children}</div>
  );
}

Text.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'body1', 'body2']),
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  variant: 'body1',
};

export default Text;
