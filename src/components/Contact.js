import React from 'react';
import { Box, Text, Heading, Flex, Spacer } from '@chakra-ui/react';

class Contact extends React.Component {
  render() {
    return (
      <Flex
        width = '100%'
        id = {this.props.id}
        direction = 'column'
      >
        <Box
          width = {['100%', '95%', '65%', '60%']}
        >
          <Heading fontSize = '2xl' fontWeight = 'bold' color = 'footer.text' lineHeight = '85%'>Contact</Heading>
          <Box height = '1em'/>
          <Text color = 'footer.text' fontSize = 'sm' fontWeight = {300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sodales venenatis eros, non eleifend nisl mollis et.
            Integer eros eros, pellentesque nec mi quis, euismod molestie urna.
          </Text>
        </Box>
      </Flex>
    )
  }
}

export default Contact
