import { db, addDoc, collection } from './firebaConfig';

const addExpense = async (expense) => {
  //await setDoc(doc(db, 'expenses'), expense);
  await addDoc(collection(db, 'expenses'), expense);
  console.log('Agregadooo!!');
};

export default addExpense;
