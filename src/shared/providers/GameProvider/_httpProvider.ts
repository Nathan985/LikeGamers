import axios from 'axios';
import { enviroments } from 'shared/config';

export const _httpProvider = axios.create({
  baseURL: enviroments.API_RAWG_HOST
})  

_httpProvider.interceptors.request.use(async config => {
  const apiKey = enviroments.API_RAWG_KEY;
  config.params && (() => {
    config.params['key'] = apiKey
  })();

  return config
})