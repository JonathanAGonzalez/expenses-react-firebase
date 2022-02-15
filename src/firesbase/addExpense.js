import { db, addDoc, collection } from './firebaConfig';

const addExpense = async (expense) => {
  await addDoc(collection(db, 'expenses'), expense);
};

export default addExpense;
