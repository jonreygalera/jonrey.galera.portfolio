import React, { useEffect } from 'react';
import useScreenType from '../../hooks/useScreenType'
import './Container.css'
import { useDispatch, useSelector } from 'react-redux';
import { setScreenType } from '../../utils/store/uiStore';

const Container = ({ children, ...others}) => {
  const dispatch = useDispatch()
  const screenType = useScreenType()
  const className = `portfolio-container`;

  useEffect(() => {
    dispatch(setScreenType(screenType))
  }, [screenType])

  return (
    <div {...others} className={className}>
      { (typeof children === 'function') ? children(screenType) : children }
    </div>
  );
}

export default Container;
