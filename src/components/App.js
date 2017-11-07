import React, { Component } from 'react';
import Conversation from '../containers/Conversation';
import logo from '../minder1.png';
import '../App.css';

const theme = {
  blobColor: 'yellow',
  userBlobColor: 'deeppink',
  user: '👀',
  bot: '😺',
  baseColor: '#ccc',
  font: "'courier', monotype",
  height: '500px',
  width: '500px',
};



const questions = [{
  text: 'Hello, I\'m Minder, a mental health bot!',
}, {
  text: 'What is your first name?',
  key: 'firstName',
}, {
  text: 'Have you ever thought about or attempted to kill yourself?',
  key: 'emotion',
  buttons: [{
    text: 'Never',
    value: '1',
  }, {
    text: 'It was just a brief passing thought',
    value: '2',
  }, {
    text: 'I have had a plan at least once to kill myself but did not try to do it',
    value: '3',
  }, {
    text: 'I have had a plan at least once to kill myself and really wanted to die',
    value: '4',
  }, {
    text: 'I have attempted to kill myself, but did not want to die',
    value: '5',
  }, {
    text: 'I have attempted to kill myself, and really hoped to die',
    value: '6',
  }]
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
