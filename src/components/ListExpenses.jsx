import { Helmet } from 'react-helmet-async';
import { Header, Title } from '../elements/Header';
import BtnBack from '../elements/BtnBack';
const ListExpenses = () => {
  return (
    <>
      <Helmet>
        <title>Listado de gastos</title>
      </Helmet>
      <Header>
        <BtnBack ruta="/" />
        <Title>Listado de gastos</Title>
      </Header>
    </>
  );
};

export default ListExpenses;
