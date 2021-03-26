import React from 'react';
import { Box, Text, Heading, Flex, Spacer } from '@chakra-ui/react';

class Landing extends React.Component {
  render() {
    return (
      <Flex
        width = '100%'
        height = {[400, 500, 600, 800]}
        id = {this.props.id}
        direction = 'column'
      >
        <Spacer/>
        <Box
          width = {['100%', '95%', '65%', '60%']}
        >
          <Heading fontSize = '6xl' fontWeight = 'bold' color = 'portfolio.text' lineHeight = '85%'>Tanner Sims</Heading>
          <Box height = '1em'/>
          <Text color = 'portfolio.text' fontSize = 'sm' fontWeight = {300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse sodales venenatis eros, non eleifend nisl mollis et.
            Integer eros eros, pellentesque nec mi quis, euismod molestie urna.
          </Text>
        </Box>
        <Spacer/>
      </Flex>
    )
  }
}

export default Landing
