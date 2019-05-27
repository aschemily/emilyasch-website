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
      <Segment id='circle'>Ruby on Rails</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>JavaScript</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>React</Segment>
      </Grid.Column>


      <Grid.Column>
      <Segment id='circle'>SQL</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>REST</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>HTML / HTML5</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>CSS</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>Semantic</Segment>
      </Grid.Column>

      <Grid.Column>
      <Segment id='circle'>Bootstrap</Segment>
      </Grid.Column>

      </Grid.Row>
      </div>
    </div>
    </Grid>
  )
}

export default Skills
