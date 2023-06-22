import { listItem } from './listItem.js';
import { getScore, postScore } from './crudAPI.js';
import { User } from './user.js';

const ul = document.querySelector('.main__ul');

export const render = async () => {
  const lbData = await getScore();
  const lbSort = lbData.sort((b, a) => a.score - b.score);
  ul.innerHTML = '';
  lbSort.map((lbData) => {
    ul.appendChild(listItem(lbData));
    return 'completed';
  });
  const li = document.querySelectorAll('.main__item');
  li.forEach((item, index) => {
    if (index % 2 !== 0) {
      item.classList.add('g-field');
    }
  });
};

export const newScore = (user, score) => {
  const newUser = new User(user, score);
  postScore(newUser);
};