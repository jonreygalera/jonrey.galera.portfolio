import { useEffect, useState } from "react";
import useWindowSize from './useWindowSize'
import { screenType as st } from "../enums/screenEnums";

export default function useScreenType() {
  const {width, height} = useWindowSize();
  const [screenType, setScreenType] = useState({
    type: null,
    width: null,
    height: null
  });

  useEffect(() => {
    setScreenType(st(width, height));
  }, [width, height]);

  return screenType;
};