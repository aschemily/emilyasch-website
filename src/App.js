import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Button, Menu, Segment } from 'semantic-ui-react'
import Skills from './Skills'
import Experience from './Experience'
import Bio from './Bio'
import Projects from './Projects'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
    <div>
      <div class='header'>
      <img id='square' src={require('./square.png')}/>
      <h1 id='hey'>Hey.</h1>
      <h1 id='intro'> I'm Emily Asch</h1>
      <h2 id='title'> Full Stack Web Developer</h2>

      </div> <br/>

      <Bio/>
      <Skills/><br/>
      <Projects/>
      <Experience/>
    </div>
    );
  }
}

export default App;
