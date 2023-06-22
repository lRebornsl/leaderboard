const axios = require('axios').default;

const id = '22rcGHIbXNHC5TKZCLSM';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

export const postScore = (object) => {
  axios.post(url, {
    user: object.user,
    score: object.score,
  });
};

export const getScore = async () => {
  const response = await axios.get(url);
  return response.data.result;
};