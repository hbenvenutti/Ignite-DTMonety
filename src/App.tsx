import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

// ---------------------------------------------------------------------------------------------- //

Modal.setAppElement('#root');

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
      <Header 
        onOpenTransactionModal={openTransactionModal}
      />
      
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isTransactionModalOpen} 
        onRequestClose={closeTransactionModal}
      />
      
      <GlobalStyle />
    </>
  );
}

export default App;
