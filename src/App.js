import React from 'react';
import {
  ChakraProvider,
  Divider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { day, night } from './styles/Themes.js';
import { Fonts } from './styles/Fonts.js';

import { ContentContainer, ContentCard, TitleCard, FooterCard } from './components/Containers.js';
import { NavBar, NavElement, NavSpacer } from './components/NavBar.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import PortfolioList from './components/Portfolio.js';
import Contact from './components/Contact.js';

import linkedProjects from './data/LinkedProjects.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      nightMode: false
    };
  }

  toggleTheme(){
    this.setState({
      nightMode: !this.state.nightMode
    })
  }

  render(){
    return (
      <ChakraProvider theme={this.state.nightMode ? night : day}>
      <Fonts/>
      <NavBar>
        <NavElement text = 'Home' target = 'landing'/>
        <Divider
          width = '20%'
          orientation = 'horizontal'
        />
        <NavElement text = 'About Me' target = 'about'/>
        <Divider
          width = '20%'
          direction = 'horizontal'
        />
        <NavElement text = 'Portfolio' target = 'portfolio'/>
        <Divider
          width = '20%'
          direction = 'horizontal'
        />
        <NavElement text = 'Contact' target = 'contact'/>
        <Divider
          width = '20%'
          direction = 'horizontal'
        />
        <ColorModeSwitcher onClick = {this.toggleTheme.bind(this)}/>
      </NavBar>
      <ContentContainer
          width = '100%'
          top = {0}
      >
        <ContentCard id = 'landing'>
          <Landing/>
        </ContentCard>
        <ContentCard id = 'about'>
          <About/>
        </ContentCard>
        <TitleCard text = 'Portfolio' id = 'portfolio'>
        </TitleCard>
        <PortfolioList
          data = {linkedProjects}
        />
        <FooterCard id>
          <Contact/>
        </FooterCard>
      </ContentContainer>
      </ChakraProvider>
    );
  }
}

export default App;
