/*
* Conversation UI
*/

import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import Container from '../primitives/Container';
import UserInput from '../primitives/UserInput';
import Message from '../components/Message';
import MessageArea from '../primitives/MessageArea';
import Loading from '../components/Loading';
import SubmitButton from '../primitives/SubmitButton';

class Conversation extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      questions: props.questions.map(question => {
        return {
          ...question,
          sender: 'BOT',
        };
      }),
      questionNumber: 0,
      userInput: '',
      disabledUserInput: false,
      messages: [],
      answers: {},
      loadingBot: false,
    }
  }

  componentWillMount() {
    const { questions, questionNumber } = this.state;

    this.setState({
      ...this.state,
      messages: [
        questions[questionNumber],
      ]
    })
  }

  componentDidMount() {
    this.userInput.focus();
  }

  handleUserInput(e) {
    e.preventDefault();
    this.setState({
      userInput: e.target.value,
    })
  }

  handleButtonSelect(select) {
    this.setState({
      messages: [
        ...this.state.messages,
        {
          text: select.text,
          type: 'USER'
        }
      ],
      answers: this.state.questions[this.state.questionNumber].key ? 
      { ...this.state.answers,
        [this.state.questions[this.state.questionNumber].key]: select.value,
      } : { ...this.state.answers, },
    }, () => {
      this.nextQuestion();
    })
  }

  finalMessage() {
    return {
      text: 'Thanks, talk to you soon!',
      type: 'final',
      sender: 'BOT',
    }
  }

  nextQuestion() {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      loadingBot: true,
    }, () => {
      if (this.state.questionNumber < this.state.questions.length) {
        setTimeout(() => {
          this.setState({
            messages: [
              ...this.state.messages,
              this.state.questions[this.state.questionNumber],              
            ],
            loadingBot: false,
          })

          if (this.state.questions[this.state.questionNumber].buttons) {
            this.setState({
              disabledUserInput: true
            });
          } else {
            this.setState({
              disabledUserInput: false
            });
            this.userInput.focus();
          }
        }, 500);
      } else {
        setTimeout(() => {
          this.setState({
            messages: [
              ...this.state.messages,
              this.finalMessage(),
            ],
            loadingBot: false,
            disabledUserInput: true,
          });
          this.props.onEnded(this.state.answers)
        }, 500);
      }
    })
  }

  

}