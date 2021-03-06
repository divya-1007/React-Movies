import * as SubmissionError  from 'react-redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function submit(values) {
  await sleep(1000); // simulate server latency
  if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
    throw new SubmissionError({
      username: 'User does not exist',
      _error: 'Login failed!',
    });
  } else if (values.password !== 'redux-form') {
    throw new SubmissionError({
      password: 'Wrong password',
      _error: 'Login failed!',
    });
  } else {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }
});