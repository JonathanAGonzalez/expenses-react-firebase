import { Helmet } from 'react-helmet-async';
import { Title, Header } from '../elements/Header';
import BtnBack from '../elements/BtnBack';
import TotalExpenses from './TotalExpenses';
import AddExpenses from './AddExpenses';
import { useParams } from 'react-router-dom';
import useGetExpense from '../hooks/useGetExpense';
import Loading, { ContainerLoading } from '../elements/Loading';

const EditExpenses = () => {
  const { id } = useParams();
  const { loading, data } = useGetExpense(id);

  return (
    <>
      <Helmet>
        <title>Editar gasto</title>
      </Helmet>
      <Header>
        <BtnBack route="/listado-gastos" />
        <Title>Editar gasto</Title>
      </Header>
      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <>
          <AddExpenses expense={data} />
          <TotalExpenses />
        </>
      )}
    </>
  );
};

export default EditExpenses;
