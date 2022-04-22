import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root'); //Sempre usar para o modal ser executado no root e não no body (visando acessibilidade)

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false); //Verifica se o modal está aberto e inicia seu valor como false, pois o modal inicia fechado

  function handleOpenNewTransactionModal() { //handle, pois depende de uma ação do usuario (como um clique)
    setNewTransactionModalOpen(true); //abre o modal
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false); //fecha o modal
  }

  return (
    <>
      <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal} /> {/* //Passar propriedade/função para enviar ao Header, no onClick */}
      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen} //abre o modal
        onRequestClose={handleCloseNewTransactionModal} // fecha o modal
      >
        <h2>Cadastrar Transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}