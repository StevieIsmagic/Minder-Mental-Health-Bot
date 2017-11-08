import React, { Component } from 'react';
import Conversation from '../containers/Conversation';
import logo from '../minder1.png';
import '../App.css';

const theme = {
  blobColor: 'pink',
  userBlobColor: 'pink',
  user: '🐨',
  bot: '🐼',
  baseColor: 'grey',
  font: "'courier', monotype",
  height: '500px',
  width: '500px',
};



const questions = [{
  text: 'Hi there, my name is Minder. I\'m a mental health bot and anything you share with me will remain anonymous. I use the same assessment tools your doctor uses and my job is to help you learn more about your mental health.',
  key: 'intro',
  buttons: [{
    text: 'Hello Minder :)',
    key: 'hello',
  }]
}, {
  text: 'When we finish, I will give you your results and you can choose what you want to do next. Does that sound fair?',
  key: 'fair',
  buttons: [{
    text: 'Yes, sounds good!',
    key: 'sure',
  }]
}, {
  text: 'If you decide to connect immediately with additional health resources, I can help you do that. You can also take these results to your doctor and it will help them give you better care too. Or you may just want to keep the results handy and stay better informed about your current mental state.',
  key: 'funFacts',
  buttons: [{
    text: 'Yes, please!',
    key: 'yes',
  }]
},{
  text: 'Lastly, if at any time you want to talk to a live mental health professional, just click the <HELP> button located to the right of this dialogue box, and you will be immediately connected to one. Does this sound good?',
  key: 'live',
  buttons: [{
    text: 'Sounds Good!',
    key: 'good',
  }]
},{
  text: 'Awesome, so let\'s begin!',
  key: 'funFacts',
  buttons: [{
    text: 'Let\'s Go!',
    key: 'yes',
  }]
}];

const App = (props) => {
  function getUserAnswers(answers) {
    console.log('answers', answers);
  }

  return (
  <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Minder Mental Health Bot (v0.02 Beta)</h1>
          </header>
          <p className="App-intro">
            
          </p>
  
    <main>
      <Conversation
        questions={questions}
        onEnded={getUserAnswers}
        theme={theme}
      />
    </ main>
  </div> 
  );
}

export default App;
