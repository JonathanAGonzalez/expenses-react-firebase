import { Title, Header } from '../../elements/Header';
import { Helmet } from 'react-helmet-async';
import BtnBack from '../../elements/BtnBack';
import TotalExpenses from '../../components/TotalExpenses';
import ListOfCategory from './ListOfCategory';

const ExpensesByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por categoría</title>
      </Helmet>
      <Header>
        <BtnBack route="/" text="Volver" />
        <Title>Gasto por categoria</Title>
      </Header>
      <ListOfCategory />
      <TotalExpenses />
    </>
  );
};

export default ExpensesByCategory;
