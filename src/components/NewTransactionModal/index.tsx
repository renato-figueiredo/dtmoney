import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState(''); //inicia o state sempre vazio, já q ele irá receber algo
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault(); //Previne que ao clicar em um botão submite não recarregue a tela

    const data = {
      title,
      value,
      category,
      type
  };

    api.post('/transactions', data)
  }

  return (
    <Modal 
        isOpen={isOpen} //abre o modal
        onRequestClose={onRequestClose} // fecha o modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={ closeImg } alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)} //event verificar o valor inserido e altera o estado title
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))} //event verificar o valor inserido e altera o estado o value, porém por ser number deve ser convertido
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }} //muda o state quando clicar
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw'); }} //muda o state quando clicar
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)} //event verificar o valor inserido e altera o estado Category
        />
        <button type="submit">
          Cadastrar
        </button>

      </Container>
  </Modal>
  );
}
