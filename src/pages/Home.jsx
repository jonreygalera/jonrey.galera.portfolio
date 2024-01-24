import React from 'react';
import profileEnum from '../enums/profileEnum';
import Text from '../components/Text/Text';
import Alert from '../components/Alert/Alert';
import Frame from '../components/Frame/Frame';
import Box from '../components/Box/Box';
import Gravatar from '../components/Gravatar/Gravatar';
import Welcome from '../features/Welcome';
import Project from '../features/Project';
import Grid from '../components/Grid/Grid';

const Home = () => {
  return (
    <Frame
      style={{
        display: 'flex',
        gap: 2
      }}
    >
      <Box>
        <Gravatar hash={profileEnum.gravatarHash}/>
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Alert style={{width: 200, padding: 7}}>Hey there! I'm <strong>{profileEnum?.firstName}</strong></Alert>
         <Grid>
          <Grid>
            <Project />
          </Grid>
          <Grid>
            <Welcome />
          </Grid>
         </Grid>
      </Box>

    </Frame>
  );
}

export default Home;
