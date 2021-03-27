import React from 'react';
import { Box, Text, Stack, Flex, Spacer, Heading } from '@chakra-ui/react';

class ContentCard extends React.Component {
  render() {
    return (
      <Box
        {...this.props}
      >
        <Box
          id = 'content-card'
          px = { ['2em', '3em', '3em', '3em'] }
          py = { ['4em', '5em', '5em', '5em'] }
          m = {'portfolio.standard'}
          bg = 'portfolio.forground'
        >
          {this.props.children}
        </Box>
      </Box>
    )
  }
}

class FooterCard extends React.Component {
  render() {
    return (
      <Box
        {...this.props}
      >
        <Box
          id = 'content-card'
          px = { ['2em', '3em', '3em', '3em'] }
          py = { ['4em', '5em', '5em', '5em'] }
          mx = {'portfolio.standard'}
          bg = 'footer.forground'
        >
          {this.props.children}
        </Box>
      </Box>
    )
  }
}

class TitleCard extends React.Component {
  render() {
    return (
      <Box
        {...this.props}
      >
        <Box
          id = 'content-card'
          p = { ['2em', '3em', '3em', '3em'] }
          m = {'portfolio.standard'}
          bg = 'portfolio.forground'
        >
          <Heading fontSize = '3xl' fontWeight = {600} color = 'portfolio.text' lineHeight = '85%'>{this.props.text}</Heading>
        </Box>
      </Box>
    )
  }
}

class ContentContainer extends React.Component {
  render() {
    return (
      <Box
        {...this.props}
        bg = 'portfolio.background'
      >
        <Flex
        >
          <Spacer/>
          <Box id = 'content-container'
            width = {['400px', '550px', '800px', '1100px']}
          >
            {this.props.children}
          </Box>
          <Spacer/>
        </Flex>
      </Box>
    )
  }
}

export { ContentCard, ContentContainer, TitleCard, FooterCard }
