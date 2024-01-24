import React, { Fragment } from 'react';
import Box from '../components/Box/Box';
import Text from '../components/Text/Text';

const PROJECT_LIST = [
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
  { name: 'Project 1', description: 'lorem ipsumxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxx'},
];

const Project = () => {
  return (
    <Box
      style={{
        border: '1px solid green'
      }}
    >
      <Text variant={'big'}>Projects</Text> 
      <hr/>
        <Box
          style={{
            maxHeight: 250,
            overflowY: 'scroll',
            border: '1px solid yellow'
          }}
        >
        {
          PROJECT_LIST?.map((projectValue, projectIndex) => (
            <div key={`project-item-${projectIndex}`}>
              <a href={`#project${projectIndex}`}>{projectValue?.name}</a><br/>
            </div>
          ))
        }
      </Box>
    </Box>
  );
}

export default Project;
