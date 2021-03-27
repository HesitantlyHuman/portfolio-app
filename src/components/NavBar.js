import React from 'react';
import { Box, Text, Stack, Flex, Button } from '@chakra-ui/react';
import { BiMenu as MenuIcon} from 'react-icons/bi';
import { MdClose as CloseIcon} from 'react-icons/md';
import { Link } from 'react-scroll';

class Logo extends React.Component{
  render(){
    return(
      <Box
      p = {'.3em'}
      {... this.props}
      >
        <Text fontSize='medium' fontWeight='bold'>
          TS
        </Text>
      </Box>
    )
  }
}

class NavToggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isOpen : props.isOpen
    }
  }

  toggle(){
    this.props.toggle();
    this.setState({
      isOpen : !this.state.isOpen
    });
  }

  render(){
    return(
      <Box display = {{base : 'block', md : 'none'}} fontSize = '2xl' onClick = {this.toggle.bind(this)}>
        {this.state.isOpen ? <CloseIcon/> : <MenuIcon/>}
      </Box>
    )
  }
}

class NavElement extends React.Component{
  constructor(props){
    super(props)
    this.target = props.target
    this.text = props.text
  }
  render(){
    return(
      <Link
        to={this.target}
        smooth = {100}
        spy = {true}
      >
        <Button
          size = 'xs'
          variant = 'ghost'
          {...this.props}
        >
          <Text fontSize = 'sm' fontWeight = {300}>
            {this.text}
          </Text>
        </Button>
      </Link>
    )
  }
}

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {isOpen : false};
  }

  toggle(){
    this.setState({
      isOpen : !this.state.isOpen
    });
  }

  render(){
    return(
      <Box
        bg = 'portfolio.highlighted'
        position = 'sticky'
        top = {0}
        {...this.props}
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          py = '.3em'
          px = {['1em', '2em', '4em', '4em']}
          color={["white", "white", "primary.700", "primary.700"]}
          {...this.props}
        >
          <Logo/>
          <NavToggle toggle={this.toggle.bind(this)} isOpen={this.state.isOpen}/>
          <Box
            display={{ base: this.state.isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Stack
              spacing={3}
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "column", "row", "row"]}
              >
              {this.props.children}
            </Stack>
          </Box>
        </Flex>
      </Box>
    )
  }
}

export { NavBar, NavElement }
