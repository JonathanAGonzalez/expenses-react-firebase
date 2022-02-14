import { db, updateDoc, doc } from './firebaConfig';

const editExpense = async (e, expense) => {
  //await setDoc(doc(db, 'expenses'), expense);
  e.preventDefault();
  const docUpdate = doc(db, 'expenses', expense.id);

  return await updateDoc(docUpdate, expense);
};

export default editExpense;
