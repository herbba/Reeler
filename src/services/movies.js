import axios from 'axios';
const baseUrl = `https://pixabay.com/api/?key=15763483-e44bd7d1a782b77b7b8429d3f&q=`;
//const baseUrl = `/v1/search?q=q/`;

const getMovie = (query, pageNumber) => {
  const request = axios.get(`${baseUrl}${query}${pageNumber}`);
  return request.then(response => response.data);
};

export default { getMovie };
