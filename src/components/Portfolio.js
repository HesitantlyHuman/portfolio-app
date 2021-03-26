import React from 'react';
import { FaGithub as GithubLogo } from 'react-icons/fa';
import { Box, Text, Stack, Flex, Image, Heading, Container, AspectRatio, Grid, Spacer, Center, Square } from '@chakra-ui/react';

class PortfolioList extends React.Component{
  render() {
    return (
      <Box
        id = {this.props.id}
        m = {'portfolio.standard'}
      >
        <Stack
          spacing = {'portfolio.standard'}
        >
          {
            this.props.data.map(data => {
              return <PortfolioItem data = {data} height = '13em' imageWidth = '16em'/>
            })
          }
        </Stack>
      </Box>
    )
  }
}

class PortfolioItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      active: false
    }
  }

  mouseOn(){
    this.setState({
      active: true
    })
  }

  mouseOff(){
    this.setState({
      active: false
    })
  }

  render() {
    return(
      <Flex
        height = {this.props.height}
        bg = 'portfolio.forground'
        onMouseOver = {this.mouseOn.bind(this)}
        onMouseOut = {this.mouseOff.bind(this)}
      >
        <Square
          bg = {this.state.active ? 'portfolio.highlighted' : 'portfolio.unselected'}
          size = {this.props.height}
          display = {['none', 'none', 'block', 'block']}
        />
        <Flex
          width = '100%'
          direction = 'row'
          border = 'solid'
          borderColor = {this.state.active ? 'portfolio.highlighted' : 'portfolio.forground'}
          borderWidth = 'portfolio.hair'
        >
          <Box
            width = '100%'
            px = 'portfolio.wide'
          >
            <Stack
              height = '100%'
              direction = 'column'
              spacing = 'portfolio.thin'
            >
              <Spacer/>
                <Heading fontSize = 'l' color = 'portfolio.text' fontWeight = {400}>{this.props.data.name}</Heading>
                <Text color = 'portfolio.text' fontSize = 'xs' fontWeight = {300}>{this.props.data.description}</Text>
                <Box
                  width = 'fit-content'
                  fontSize = '2xl'
                >
                  <a href = {this.props.data.github}>
                    <GithubLogo
                      color = 'portfolio.text'
                    />
                  </a>
                </Box>
                <Spacer/>
              </Stack>
            </Box>
          <Image
            height = {this.props.height}
            src = {process.env.PUBLIC_URL + this.props.data.image}
            width = {this.props.imageWidth}
            fit = 'cover'
            alt = 'missing link'
            p = 'portfolio.standard'
            display = {['none', 'block', 'block', 'block']}
          />
        </Flex>
      </Flex>
    )
  }
}

export default PortfolioList
