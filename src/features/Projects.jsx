import React from 'react';
import Box from '../components/Box';

const PROJECT_LIST = [
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { name: 'Project 1', description: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
]

const Projects = () => {
  return (
    <Box classList='border border-1 border-black'>
      <h3>Projects</h3>
      <hr/>
      <Box
        style={{
          overflowY: 'auto',
          maxHeight: 100
        }}
      >
        {
          PROJECT_LIST?.map((projectValue, projectIndex) => (
            <span>projecy<br/></span>
          ))
        }
      </Box>
    </Box>
  );
}

export default Projects;
