import React from 'react';
import { FaGithub as GithubLogo } from 'react-icons/fa';
import { Box, Text, Stack, Flex, Image, Heading, Container, AspectRatio, Grid, Spacer, Center, Square, Icon } from '@chakra-ui/react';

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
              return <PortfolioItem data = {data} height = '13em' imageWidth = '16em' cursor = 'default'/>
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
      hover: false,
      active: false
    }
  }

  mouseOn(){
    this.setState({
      hover: true
    })
  }

  mouseOff(){
    this.setState({
      hover: false
    })
  }

  toggle(){
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return(
      <button
        onClick = {this.toggle.bind(this)}
      >
        <Flex
          height = {this.state.active ? 'auto' : this.props.height}
          bg = 'portfolio.forground'
          onMouseOver = {this.mouseOn.bind(this)}
          onMouseOut = {this.mouseOff.bind(this)}
          cursor = {this.props.cursor}
        >
          <Box
            bg = {this.state.active ? 'portfolio.highlighted' : this.state.hover ? 'portfolio.highlighted' : 'portfolio.unselected'}
            height = {this.state.active ? '30em' : this.props.height}
            width = {this.state.active ? '3em' : this.props.height}
            display = {this.state.active ? 'block' : ['none', 'none', 'block', 'block']}
          />
          <Flex
            width = '100%'
            direction = 'row'
            border = 'solid'
            borderLeftStyle = {['solid', 'solid', 'none', 'none']}
            borderColor = {this.state.active ? 'portfolio.highlighted' : this.state.hover ? 'portfolio.highlighted' : 'portfolio.forground'}
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
                  <Box
                    overflow = 'hidden'
                  >
                    <Heading
                      fontSize = 'l'
                      color = 'portfolio.text'
                      textAlign = 'left'
                      fontWeight = {400}
                    >
                      {this.props.data.name}
                    </Heading>
                    <Text
                      color = 'portfolio.text'
                      fontSize = 'xs'
                      fontWeight = {300}
                      textAlign = 'left'
                    >
                      {this.props.data.description}
                    </Text>
                  </Box>
                  <Box
                    width = 'fit-content'
                    fontSize = '2xl'
                  >
                    <a href = {this.props.data.github}>
                      <Icon
                        as = {GithubLogo}
                        fill = 'portfolio.text'
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
              display = {this.state.active ? 'none' : ['none', 'block', 'block', 'block']}
            />
          </Flex>
        </Flex>
      </button>
    )
  }
}

export default PortfolioList
