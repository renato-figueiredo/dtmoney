import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({ //chama a função do miragajs
  models: { //banco de dados do miragejs
    transaction: Model,
  },

  seeds(server) { //função seeds que receber server para preencher dados na "fake api" do miragejs
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ],
    })
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
