import React from 'react';

const Box = (props) => {
  const {
    classList = '', 
    children, 
    ...others
  } = props;

  const className = `container mx-auto ${classList}`;

  return (
    <div class={className} {...others}>
      {children}
    </div>
  );
}

export default Box;
