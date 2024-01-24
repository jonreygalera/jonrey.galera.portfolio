import { Fragment, lazy, useEffect } from "react"
import profileEnum from "./enums/profileEnum";
import './assets/css/style.css';
import Container from "./components/Container/Container";
import Box from "./components/Box/Box";
import useTheme from "./hooks/useTheme";
import CornerBox from "./components/CornerBox/CornerBox";
import ButtonTheme from "./features/ButtonTheme";

const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./features/Header'));

function App() {
  useTheme();
  useEffect(() => {
    document.title = profileEnum.firstName;
  }, []);

  return (
    <Container variant='main'>
      <Container
        style={{ padding: 50}}
      >
      {
        () => (
          <Fragment>
            <Header />
            <CornerBox><ButtonTheme/></CornerBox>
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
    </Container>
  )
}

export default App
