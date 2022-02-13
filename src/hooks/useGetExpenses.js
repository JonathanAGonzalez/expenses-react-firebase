import { useState, useEffect } from 'react';
import {
  db,
  onSnapshot,
  query,
  orderBy,
  where,
  limit,
  collection,
  startAfter,
} from '../firesbase/firebaConfig';
import useUserContext from './useUserContext';

const useGetExpenses = () => {
  const [expenses, setExpenses] = useState({ loading: true, expenses: [] });
  const [lastExpense, setLastExpense] = useState(null);
  const [moreToLoad, setMoreToLoad] = useState(false);

  const { stateUserContext: user } = useUserContext();

  const getMoreExpenses = () => {
    const queries = query(
      collection(db, 'expenses'),
      where('idUser', '==', user.uid),
      orderBy('date', 'desc'),
      limit(10),
      startAfter(lastExpense)
    );
    onSnapshot(queries, (snapshot) => {
      if (snapshot.docs.length > 0) {
        setLastExpense(snapshot.docs[snapshot.docs.length - 1]);
        const newExpenses = snapshot
          .docChanges()
          .map((expense) => ({ ...expense.doc.data(), id: expense.doc.id }));
        setExpenses({
          ...expenses,
          expenses: [...expenses.expenses, ...newExpenses],
        });
      }
    });
  };

  useEffect(() => {
    const queries = query(
      collection(db, 'expenses'),
      where('idUser', '==', user.uid),
      orderBy('date', 'desc'),
      limit(10)
    );

    const unsuscribe = onSnapshot(queries, (data) => {
      if (data.docs.length > 0) {
        setLastExpense(data.docs[data.docs.length - 1]);
        setMoreToLoad(true);
      } else {
        setMoreToLoad(false);
      }
      // const newExpenses = data
      //   .docChanges()
      //   .map((expense) => ({ ...expense.doc.data(), id: expense.doc.id }));

      setExpenses({
        loading: false,
        expenses: data
          .docChanges()
          .map((expense) => ({ ...expense.doc.data(), id: expense.doc.id })),
      });
    });

    return unsuscribe;
  }, [user]);

  return { expenses, moreToLoad, getMoreExpenses };
};

export default useGetExpenses;
