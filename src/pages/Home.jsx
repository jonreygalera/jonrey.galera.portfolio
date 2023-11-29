import React from 'react';
import profileEnum from '../enums/profileEnum';
import Text from '../components/Text/Text';

const Home = () => {
  return (
    <div>
      Hey there! I'm <Text>{profileEnum?.firstName}</Text>, a passionate programmer on a mission to turn ideas into lines of code. Explore my projects, dive into the code, and let's connect! 🚀

      Happy coding!
    </div>
  );
}

export default Home;
