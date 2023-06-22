export const listItem = (lbData) => {
  // Creating DOM elements
  const li = document.createElement('li');
  // Adding classes
  li.classList.add('main__item');
  // Insert data
  li.innerText = `${lbData.user}: ${lbData.score}`;
  // return list item
  return li;
};

export default listItem;