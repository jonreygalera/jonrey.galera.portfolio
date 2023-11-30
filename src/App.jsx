import { Fragment, lazy, useEffect } from "react"
import profileEnum from "./enums/profileEnum";
import './assets/css/style.css';
import { useSelector } from "react-redux";
import Container from "./components/Container/Container";
import Box from "./components/Box/Box";

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./features/Header'));

function App() {
  const theme = useSelector((state) => state.uiStore.theme)
  const bodyTag = document.querySelector('body');

  useEffect(() => {
    document.title = profileEnum.firstName;
    bodyTag.classList.remove(`body-dark`);
    bodyTag.classList.remove(`body-light`);
    bodyTag.classList.add(`body-${theme}`);
  }, [theme]);

  return (
    <Container>
     {
      () => (
        <Fragment>
           <Header />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Home />
            </Box>
        </Fragment>
      )
     }
    </Container>
  )
}

export default App
