import axios from 'axios';
//const baseUrl = `https://pixabay.com/api/?key=15763483-e44bd7d1a782b77b7b8429d3f&q=`;
const baseUrl = `http://206.189.28.120:5000/search?q=`;

const getResults = (query) => {
  const request = axios.get(`${baseUrl}${query}`);
  return request.then((response) => response.data);
};

export default { getResults };
