const axios = require('axios').default;

const id = '22rcGHIbXNHC5TKZCLSM';

export const newGame = async () => {
  await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    name: 'Leader Game',
  });
};

export const postScore = (object) => {
  axios.post(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`, {
    user: object.user,
    score: object.score,
  });
};

export const getScore = async () => {
  const response = await axios.get(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`);
  return response.data.result;
};