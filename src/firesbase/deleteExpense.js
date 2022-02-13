import { db, deleteDoc, doc } from './firebaConfig';

const deleteExpense = async (id) => {
  await deleteDoc(doc(db, 'expenses', id));
  console.log('Borrado!!');
};

export default deleteExpense;
