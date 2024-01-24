import React from 'react';
import PropTypes from 'prop-types';
import './CornerBox.css';

const CornerBox = (props) => {
  const { variant, children } = props;

  const className = `corner-box corner-box${variant}`;
  return (
    <div className={className}>
      {children}
    </div>
  );
}

CornerBox.propTypes = {
  variant: PropTypes.oneOf(['bottom']),
  children: PropTypes.node.isRequired,
};

CornerBox.defaultProps = {
  variant: 'bottom',
};

export default CornerBox;
