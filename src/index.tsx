import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({ //chama a função do miragajs
  models: { //banco de dados do miragejs
    transaction: Model,
  },


  routes() { //define as rotas da API ficticia
    this.namespace = 'api'; //captar todas chamas que estão direcionadas para 'api'

    this.get('/transactions', () => { //retorna todas transactions
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { //adiciona todas transactions
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data) //schema é o banco de dados
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
