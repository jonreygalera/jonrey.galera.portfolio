import React from 'react';
import Box from '../components/Box/Box';
import Text from '../components/Text/Text';

const Welcome = () => {
  return (
    <Box>
      <Text variant={'big'}>Lorem ipsum</Text> 
      <Text variant={'caption-medium'}>
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </Text>
      <Text variant={'body1'}>Lorem ipsum</Text>
    </Box>
  );
}

export default Welcome;
