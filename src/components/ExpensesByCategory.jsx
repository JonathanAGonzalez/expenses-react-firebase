import { Title, Header } from '../elements/Header';
import { Helmet } from 'react-helmet-async';
import BtnBack from '../elements/BtnBack';

const ExpensesByCategory = () => {
  return (
    <>
      <Helmet>
        <title>Gastos por categoría</title>
      </Helmet>
      <Header>
        <BtnBack route="/" />
        <Title>Gasto por categoria</Title>
      </Header>
    </>
  );
};

export default ExpensesByCategory;
