import React from 'react';
import Box from '../components/Box';

const PROJECT_LIST = [
  { title: 'Project 1', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww', tags: ['php', 'js', 'laravel']},
  { title: 'Project 2', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 3', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 4', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 5', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 6', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 7', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 8', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 9', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 10', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 11', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
  { title: 'Project 12', content: 'loremmmmmmmmmmmmmmm  mmmmmmmmmmmmmmmmmm  mm mww'},
]

const Projects = (props) => {
  const { onClickProject } = props;

  const handleOnClickProject = (data) => onClickProject(data);

  return (
    <Box classList='border border-1 border-black'>
      <h1>Projects</h1>
      <hr/>
      <Box
        style={{
          overflowY: 'auto',
          maxHeight: 100
        }}
      >
        <ul>
        {
          PROJECT_LIST?.map((projectValue, projectIndex) => (
            <li><button onClick={() => handleOnClickProject(projectValue)}>{projectValue?.title}</button></li>
          ))
        }
        </ul>
      </Box>
    </Box>
  );
}

export default Projects;
