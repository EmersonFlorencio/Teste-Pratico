import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001'
});

/*
  Foi utilizado o Axios para intermedia a comunicação do frontend com o backend. 
 */