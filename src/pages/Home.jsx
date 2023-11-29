import React from 'react';
import profileEnum from '../enums/profileEnum';
import Text from '../components/Text/Text';
import Alert from '../components/Alert/Alert';
import Frame from '../components/Frame/Frame';

const Home = () => {
  return (
    <Frame>
      <Alert> Hey there! </Alert>
        I'm <Text>{profileEnum?.firstName}</Text>, a passionate programmer on a mission to turn ideas into lines of code. Explore my projects, dive into the code, and let's connect! 🚀

      Happy coding!
    </Frame>
  );
}

export default Home;
