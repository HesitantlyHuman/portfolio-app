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
            I first learned to code in 6th grade (don’t worry, I won’t show you any of those projects). These days I focus on data science and machine learning, with an emphasis in model interpretability of deep networks. I am currently pursuing a bachelor’s in mathematics with an emphasis in computation at the University of Utah[citation needed], where I am engaged in machine learning research. I mainly work with pytorch, numpy and tensorflow, but have been known to learn new languages and packages as the mood strikes me.
          </Text>
        </Box>
      </Box>
    )
  }
}

export default About
