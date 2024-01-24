import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../utils/store/uiStore';
import themeEnum from '../enums/themeEnum';
import { useLocalStorage } from '../hooks/useStorage';
import Button from '../components/Button/Button';

const ButtonTheme = () => {
  const theme = useSelector((state) => state.uiStore.theme)
  const dispatch = useDispatch()
  const [, setCurrentTheme] = useLocalStorage('theme', theme)

  const handleOnClickTheme = (event) => {
    dispatch(changeTheme(theme === themeEnum.DARK ? themeEnum.LIGHT : themeEnum.DARK))
    setCurrentTheme(theme);
  }

  return (<Button onClick={handleOnClickTheme}>[ {theme} ]</Button>);
}

export default ButtonTheme;
