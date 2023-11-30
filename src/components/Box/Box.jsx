import React, { useEffect } from 'react';
import useScreenType from '../../hooks/useScreenType'
import './Box.css'
import { useDispatch, useSelector } from 'react-redux';
import { setScreenType } from '../../utils/store/uiStore';

const Box = ({ children, ...others}) => {
  const dispatch = useDispatch()
  const screenType = useScreenType()
  const className = `portfolio-box`;

  useEffect(() => {
    dispatch(setScreenType(screenType))
  }, [screenType])

  return (
    <div {...others} className={className}>
      { (typeof children === 'function') ? children(screenType) : children }
    </div>
  );
}

export default Box;
