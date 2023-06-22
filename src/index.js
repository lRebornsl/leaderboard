import './index.scss';
import { newGame } from './modules/crudAPI';
import { render, newScore } from './modules/handleLboard';

const refresh = document.querySelector('.refreshButton');
const inputUser = document.getElementById('main__form--user');
const inputScore = document.getElementById('main__form--score');
const submit = document.querySelector('.main__form--submit');

render();

refresh.addEventListener('click', () => {
  render();
})

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const userInput = inputUser.value;
  const scoreInput = inputScore.value;
  if(userInput !== '' && scoreInput !== '') {
    newScore(userInput, scoreInput);
    inputUser.value = '';
    inputScore.value = '';
  }
})