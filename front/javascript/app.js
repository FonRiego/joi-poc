
const Joi = require('joi-browser');

import { apiService } from './service.js';
import { validators } from './validators.js';

const setValidator = (id) => {
  return validators[id]
};

const setResult = (error, value) => {
  if (error) {
    document.querySelector('.result').classList.add('failed');
    document.querySelector('.result').classList.remove('passed');
    document.querySelector('.result').innerText = error
  } else {
    document.querySelector('.result').classList.add('passed');
    document.querySelector('.result').classList.remove('failed');
    document.querySelector('.result').innerText = JSON.stringify(value, null, 4)
  };
};

const launchValidations = (dataToValidate, id) => {
  const validator = setValidator(id).validator;

  const { error, value } = validator.validate(dataToValidate)
  setResult(error, value)

  const assertResult = Joi.assert(dataToValidate, validator)
  console.log('assert result valid', assertResult)

  const attemptResult = Joi.attempt(dataToValidate, validator)
  console.log('attempt result valid', attemptResult)
};

const fetchData = (id) => {
  const dataPromise = new Promise((resolve, reject) => {
    resolve(apiService('GET', id));
  });
  dataPromise.then(data => {
    const dataToValidate = Object.keys(data).length > 1 ? data : data[Object.keys(data)[0]]
    document.querySelector('.response').innerText = JSON.stringify(dataToValidate,  null, 4);
    document.querySelector('.validator').innerText = setValidator(id).string;
    launchValidations(dataToValidate, id)
  });
};

const buttons = document.querySelectorAll('button');

const setActive = (id) => {
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`#${id}`).classList.add('active');
};

const handleClick = (event) => {
  const id = event.target.id;
  fetchData(id);
  setActive(id);
};

buttons.forEach(button => {
  button.addEventListener('click', handleClick);
});
