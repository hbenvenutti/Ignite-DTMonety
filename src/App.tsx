import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

// ---------------------------------------------------------------------------------------------- //

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function openTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function closeTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  // -------------------------------------------------------------------------------------------- //

  return (
    <>
      <Header onOpenTransactionModal={openTransactionModal}/>
      <Dashboard />
      
      <Modal 
        isOpen={isTransactionModalOpen}
        onRequestClose={closeTransactionModal} 
      >
        <h2>Cadastrar Transação</h2>
      </Modal>
      
      <GlobalStyle />
    </>
  );
}

export default App;
