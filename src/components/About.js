import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';

class About extends React.Component {
  render() {
    return (
      <Box
        width = '100%'
        id = {this.props.id}
      >
        <Box
          width = {['100%', '95%', '85%', '85%']}
        >
          <Heading fontSize = '3xl' fontWeight = {600} color = 'portfolio.text' lineHeight = '85%'>About Me</Heading>
          <Box height = '1em'/>
          <Text color = 'portfolio.text' fontSize = 'sm' fontWeight = {300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales venenatis eros, non eleifend nisl mollis et. Integer eros eros, pellentesque nec mi quis, euismod molestie urna. Suspendisse non maximus libero. Nam aliquam rutrum nisi, id finibus diam iaculis convallis. Sed pellentesque, tortor quis gravida luctus, magna odio luctus nisi, fringilla tincidunt quam libero vitae diam. Suspendisse vel felis vitae eros malesuada porttitor. Maecenas elementum elit et ligula volutpat, eu finibus nunc varius. Donec mattis ultricies magna, vel lobortis turpis tempus fermentum. Aenean porttitor mattis ante sed porttitor. Morbi maximus orci ac ligula tristique tempor. Proin gravida tellus eu diam consectetur, at hendrerit mauris sodales. 
          </Text>
        </Box>
      </Box>
    )
  }
}

export default About
