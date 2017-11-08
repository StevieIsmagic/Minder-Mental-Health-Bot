
const questions = [{
  text: 
}];



const questions = [{
  text: 'Hi there, my name is Minder. I\'m a mental health bot and anything you share with me will remain anonymous. My job is to help you learn about your mental health, and I use the same tools your doctor uses.',
  key: 'intro',
}, {
  text: 'Is this our first chat?',
  key: 'firstChat',
  buttons: [{
    text: ''
  }],
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