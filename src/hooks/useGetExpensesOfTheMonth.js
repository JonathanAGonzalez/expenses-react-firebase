import { useEffect, useState } from 'react';
import { getUnixTime } from 'date-fns';

import {
  db,
  onSnapshot,
  query,
  orderBy,
  where,
  collection,
} from '../firesbase/firebaConfig';
import useUserContext from './useUserContext';
import { startOfMonth, endOfMonth } from 'date-fns';

const useGetExpensesOfTheMonth = () => {
  const [expenses, setExpenses] = useState([]);
  const { stateUserContext: user } = useUserContext();

  useEffect(() => {
    const startMonth = getUnixTime(startOfMonth(new Date()));
    const endMonth = getUnixTime(endOfMonth(new Date()));

    const q = query(
      collection(db, 'expenses'),
      where('idUser', '==', user.uid),
      where('date', '>=', startMonth),
      where('date', '<=', endMonth),
      orderBy('date', 'desc')
    );

    const getError = (err) => {
      console.error(err);
    };

    const unsuscribe = onSnapshot(
      q,
      (snapshot) => {
        const expenses = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setExpenses(expenses);
      },
      getError
    );

    return unsuscribe;
  }, [user]);

  return expenses;
};

export default useGetExpensesOfTheMonth;
