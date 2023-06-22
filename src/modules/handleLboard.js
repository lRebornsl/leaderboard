import { listItem } from "./listItem";
import { getScore, postScore } from "./crudAPI";
import { User } from "./user";

const ul = document.querySelector('.main__ul');

export const render = async () => {
  const lbData = await getScore();
  ul.innerHTML = '';
  lbData.map(lbData => {
    ul.appendChild(listItem(lbData));
  })
  const li = document.querySelectorAll('.main__item');
  li.forEach((item, index) => {
    if (index % 2 !== 0) {
      item.classList.add('g-field');
    }
  });
}

export const newScore = (user, score) => {
  const newUser = new User(user, score);
  postScore(newUser);
}