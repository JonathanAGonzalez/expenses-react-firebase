import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, getDoc, doc } from '../firesbase/firebaConfig';

const useGetExpense = (id) => {
  const [expense, setExpense] = useState({ loading: true, data: null });
  const navigate = useNavigate();
  useEffect(() => {
    async function getExpense() {
      const docExpense = await getDoc(doc(db, 'expenses', id));
      if (docExpense.exists) {
        setExpense({
          loading: false,
          data: { ...docExpense.data(), id: docExpense.id },
        });
      } else {
        navigate('/listado-gastos');
      }
    }
    getExpense();
  }, [navigate, id]);

  return expense;
};

export default useGetExpense;
