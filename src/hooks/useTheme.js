import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useTheme() {
  const documentElements = document.documentElement.classList;
  const theme = useSelector((state) => state.uiStore.theme);

  useEffect(() => {
    documentElements.remove(`dark`);
    documentElements.remove(`light`);
    documentElements.add(theme);
  }, [theme]);

  return theme;
};
