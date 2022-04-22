import axios from 'axios';

export const api = axios.create({ //cria uma instancia do axios
  baseURL: 'http://localhost:3000/api', //url que se repete
})