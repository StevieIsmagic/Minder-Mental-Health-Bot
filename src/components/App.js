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
  text: 'Hi there, my name is Minder. I\'m a mental health bot and anything you share with me will remain anonymous. My job is to help you learn about your mental health and I use the same tools your doctor uses.',
  key: 'intro',
  buttons: [{
    text: 'Hello Minder :)',
    key: 'hello',
  }]
}, {
  text: 'At any time, feel free to type <FUN FACTS> and I will share with you the latest mental health tips and statistics.',
  key: 'funFacts',
  buttons: [{
    text: 'Ok Cool !',
    key: 'cool',
  }]
}, {
  text: 'When we finish, I will give you your results and you can choose what you want to do next. Does that sound fair?',
  key: 'fair',
  buttons: [{
    text: 'SURE !',
    key: 'sure',
  }]
}, {
  text: 'If you decide..',
  key: 'funFacts',
  buttons: [{
    text: 'Ok Cool !',
    key: 'cool',
  }]
},{
  text: 'Have you ever thought about or attempted to kill yourself?',
  key: 'emotion',
}, {
  text: 'Do you like this image?',
  key: 'imageLike',
  image: 'https://unsplash.it/400/300/?random',
  buttons: [{
    text: 'Yes, looks great!',
    value: 'yes',
  }, {
    text: 'No really...',
    value: 'no',
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
            <h1 className="App-title">Minder Mental Health Bot</h1>
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
