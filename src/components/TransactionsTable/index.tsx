import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions') //trocar o fetch para uso da biblioteca AXIOS
      //.then(response => response.json()) [não é mais necessario converter para JSON por usar a biblioteca axios]//Pegar a resposta da requisição e converter para formato json
      .then(response => console.log(response.data)) //retornar para visualização no console
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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}