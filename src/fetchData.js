import axios from "axios";

export const getData = async () => {
  const apiKey =
    "b9b98cafbb643044cef9ea3019902c00e3c6178f79b2bf1fa32050d78ac75eec";

  let res = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/histoday?api_key=${apiKey}&fsym=BTC&tsym=USD&limit=10`
  )
};
