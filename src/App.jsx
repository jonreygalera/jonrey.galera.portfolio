import { Fragment, lazy, useEffect } from "react"
import profileEnum from "./enums/profileEnum";
import './assets/css/style.css';
import { useSelector } from "react-redux";
import Container from "./components/Container/Container";

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./features/Header'));

function App() {
  const theme = useSelector((state) => state.uiStore.theme)

  useEffect(() => {
    document.title = profileEnum.firstName;
  }, []);

  return (
    <Container>
     {
      () => (
        <Fragment>
           <Header />
            <Home />
        </Fragment>
      )
     }
    </Container>
  )
}

export default App
