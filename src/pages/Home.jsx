import React from 'react';
import profileEnum from '../enums/profileEnum';
import Text from '../components/Text/Text';
import Alert from '../components/Alert/Alert';
import Frame from '../components/Frame/Frame';
import Box from '../components/Box/Box';
import Gravatar from '../components/Gravatar/Gravatar';

const Home = () => {
  return (
    <Frame
      style={{
        display: 'flex',
        gap: 2
      }}
    >
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <Alert style={{width: 200, padding: 7}}>Hey there! I'm <strong>{profileEnum?.firstName}</strong></Alert>
          <Text variant={'h3'}>A Passionate Programmer</Text> on a mission to turn ideas into lines of code. Explore my projects, 
            dive into the code, and let's connect! 🚀

            Happy coding!
      </Box>
      <Box>
        <Gravatar hash={profileEnum.gravatarHash}/>
      </Box>
    </Frame>
  );
}

export default Home;
