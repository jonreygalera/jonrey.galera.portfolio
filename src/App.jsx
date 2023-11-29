import { lazy, useEffect } from "react"
import profileEnum from "./enums/profileEnum";
import './assets/css/style.css';
import themeEnum from "./enums/themeEnum";
import { useLocalStorage } from "./hooks/useStorage";
import { useSelector } from "react-redux";

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./features/Header'));

function App() {
  const theme = useSelector((state) => state.uiStore.theme)

  useEffect(() => {
    document.title = profileEnum.firstName;
  }, []);

  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
