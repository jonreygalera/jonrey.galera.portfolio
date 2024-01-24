import { useEffect } from "react"
import profileEnum from "./enums/profileEnum";
import useTheme from "./hooks/useTheme";
import Box from "./components/Box";
import Gravatar from "./components/Gravatar";
import Projects from "./features/Projects";

const App = () => {

  const theme = useTheme();
  useEffect(() => {
    document.title = profileEnum.firstName;
  }, []);

  return (
    <Box
      classList='
        rounded-xl 
        border-solid 
        border-2 
        border-black
        flex
        flex-col
      '
      style={{
        maxHeight: '100vh'
      }}
    >
      <Box classList='flex flex-row'>
        <Gravatar />
        <span>Jon Rey</span>
      </Box>
      <Box  classList='flex flex-row'>
        
        <Box  classList='flex flex-row'>
          <Box  classList='flex flex-col'>
            <Box>
              <Projects />
            </Box>
            <Box>
              <Projects />
            </Box>
          </Box>
        </Box>

        <Box  classList='flex flex-row'>
          <Box>
            <Projects />
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default App
