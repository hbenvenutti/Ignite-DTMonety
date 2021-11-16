import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './TransactionsContext'

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
    <TransactionsProvider>
      <Header 
        onOpenTransactionModal={openTransactionModal}
      />
      
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isTransactionModalOpen} 
        onRequestClose={closeTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
