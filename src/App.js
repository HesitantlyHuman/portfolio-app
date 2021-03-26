import React from 'react';
import {
  ChakraProvider,
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
import { NavBar, NavElement } from './components/NavBar.js';
import Landing from './components/Landing.js';
import About from './components/About.js';
import PortfolioList from './components/Portfolio.js';
import Contact from './components/Contact.js';

const receivedPortfolioItems = [
  {'name' : 'Generating structured latent spaces with VAEs',
  'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales venenatis eros, non eleifend nisl mollis et. Integer eros eros, pellentesque nec mi quis, euismod molestie urna.',
  'github' : 'https://www.google.com',
  'image' : '/images/high_dimensional.png'},
  {'name' : 'Predicting location masks of Human Kidney Glomeruli: A Kaggle competition',
  'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales venenatis eros, non eleifend nisl mollis et. Integer eros eros, pellentesque nec mi quis, euismod molestie urna.',
  'image' : '/images/glomeruli.webp'},
  {'name' : 'How to win at Gomoku (Five in a row), Reinforcement learning with style',
  'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales venenatis eros, non eleifend nisl mollis et. Integer eros eros, pellentesque nec mi quis, euismod molestie urna.',
  'image' : '/images/gomoku.jpg'}
];

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
        <NavElement text = 'About Me' target = 'about'/>
        <NavElement text = 'Portfolio' target = 'portfolio'/>
        <NavElement text = 'Contact' target = 'contact'/>
        <ColorModeSwitcher onClick = {this.toggleTheme.bind(this)}/>
      </NavBar>
      <ContentContainer
          width = '100%'
          top = {0}
      >
        <ContentCard>
          <Landing
            id = 'landing'>
          </Landing>
        </ContentCard>
        <ContentCard>
          <About
            id = 'about'
          />
        </ContentCard>
        <TitleCard text = 'Portfolio'>
        </TitleCard>
        <PortfolioList
          data = {receivedPortfolioItems}
          id = 'portfolio'
        />
        <FooterCard>
          <Contact/>
        </FooterCard>
      </ContentContainer>
      </ChakraProvider>
    );
  }
}

export default App;
