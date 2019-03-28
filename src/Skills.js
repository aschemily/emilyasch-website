import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'


function Skills (){
  return (
    <Grid>
    <div id='centered'>
      <div id='skills'>
      <img id='computer' src={require('./computer.jpg')}/>
      <h1 id='skill'>SKILLS</h1>
      <Grid.Row columns={6}>

      <Grid.Column>
      <Segment id='circle'>Ruby </Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>>Ruby on Rails</Segment>
      </Grid.Column>

      <h3>JavaScript</h3>
      <h3>React</h3>
      <h3>SQL</h3>
      <h3>REST</h3>
      <h3>HTML / HTML5</h3>
      <h3>CSS</h3>
      <h3>Semantic</h3>
      <h3>Bootstrap</h3>
      </Grid.Row>
      </div>
    </div>
    </Grid>
  )
}

export default Skills
