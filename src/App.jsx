import { useEffect, useState } from "react"
import profileEnum from "./enums/profileEnum";
import useTheme from "./hooks/useTheme";
import Box from "./components/Box";
import Gravatar from "./components/Gravatar";
import Projects from "./features/Projects";
import PreviewText from "./features/PreviewText";

const App = () => {

  const [ selectedProject, setSelectedProject ] = useState(null);

  const theme = useTheme();
  useEffect(() => {
    document.title = profileEnum.firstName;
  }, []);

  return (
    <div>
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
        <Box  classList='flex flex-row gap-4'>
          <Box>
            <Projects onClickProject={(data) => setSelectedProject(data)} />
          </Box>

          <Box>
            <PreviewText data={selectedProject}/>
          </Box>

        </Box>
      </Box>
    </div>
  )
}

export default App
