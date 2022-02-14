import { db, deleteDoc, doc } from './firebaConfig';

const deleteExpense = async (id) => {
  await deleteDoc(doc(db, 'expenses', id)).then(() => {
    console.log('borrado');
  });
};

export default deleteExpense;
