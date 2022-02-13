import { useState, useEffect } from 'react';
import {
  db,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
  collection,
} from '../firesbase/firebaConfig';
import useUserContext from './useUserContext';

const useGetExpenses = () => {
  const [expenses, setExpenses] = useState({ loading: true, expenses: [] });
  const { stateUserContext: user } = useUserContext();

  useEffect(() => {
    const queries = query(
      collection(db, 'expenses'),
      where('idUser', '==', user.uid),
      orderBy('date', 'desc'),
      limit(10)
    );

    const unsuscribe = onSnapshot(queries, (data) => {
      const expenses = data
        .docChanges()
        .map((expense) => ({ ...expense.doc.data(), id: expense.doc.id }));
      setExpenses({ loading: false, expenses });
      console.log(expenses);
    });

    return unsuscribe;
  }, [user]);

  return expenses;
};

export default useGetExpenses;
