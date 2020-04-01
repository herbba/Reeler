import axios from 'axios';

const cancelToken = axios.CancelToken.source();

const isCancel = error => {
  return axios.isCancel(error);
};

export default { cancelToken, isCancel };
