import axios from "axios";

export const makeApiCall = payload => {
  const apiKey = process.env.REACT_APP_CRYPTO_INDEX
  return axios(
    `https://min-api.cryptocompare.com/data/v2/histoday?api_key=${apiKey}&fsym=${payload}&tsym=USD&limit=30`
  , {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      data: payload,
  })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};
