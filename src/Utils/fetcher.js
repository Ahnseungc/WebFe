import axios from 'axios';

const fetcher = (url) => {
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

export default fetcher;
