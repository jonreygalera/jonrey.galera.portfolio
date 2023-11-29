import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../utils/store/uiStore';
import themeEnum from '../enums/themeEnum';
import { useLocalStorage } from '../hooks/useStorage';
import Button from '../components/Button/Button';

const Header = () => {
  const theme = useSelector((state) => state.uiStore.theme)
  const dispatch = useDispatch()
  const [, setCurrentTheme] = useLocalStorage('theme', theme)

  const handleOnClickTheme = (event) => {
    dispatch(changeTheme(theme === themeEnum.DARK ? themeEnum.LIGHT : themeEnum.DARK))
    setCurrentTheme(theme);
  }

  return (
    <div>
      <Button onClick={handleOnClickTheme}>Change Theme [ {theme} ]</Button>
    </div>
  );
}

export default Header;
