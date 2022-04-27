import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions') //trocar o fetch para uso da biblioteca AXIOS
      //.then(response => response.json()) [não é mais necessario converter para JSON por usar a biblioteca axios]//Pegar a resposta da requisição e converter para formato json
      //.then(response => console.log(response.data)) //retornar para visualização no console
      .then(response => setTransactions(response.data.transactions)) //retornar para visualizaçãosalvando os dados no estado
  }, []);// Array vazio para rodar apenas uma vez por ser apenas uma busca

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => { 
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}