import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useTheme() {
  const bodyTag = document.querySelector('body');
  const theme = useSelector((state) => state.uiStore.theme);
  
  useEffect(() => {
    bodyTag.classList.remove(`body-dark`);
    bodyTag.classList.remove(`body-light`);
    bodyTag.classList.add(`body-${theme}`);
  }, [theme]);

  return theme;
};
