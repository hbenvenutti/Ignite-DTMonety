import  { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

// ---------------------------------------------------------------------------------------------- //

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput  = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

// ---------------------------------------------------------------------------------------------- //

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [ transactions, setTransactions ] = useState<Transaction[]>([])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput, 
      createdAt: new Date() 
    })

    const { transactions } = response.data;

    setTransactions(
      [...transactions, transactions]
    );
  }

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionsContext.Provider>
  )
}
