import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Header, Title } from '../elements/Header';
import BtnBack from '../elements/BtnBack';
import TotalExpenses from './TotalExpenses';
import useGetExpenses from '../hooks/useGetExpenses';
import {
  List,
  ElementList,
  ContainerLoading,
  ListaDeCategorias,
  ElementoListaCategorias,
  Category,
  Description,
  Value,
  Fecha,
  ContainerButtons,
  ButtonAction,
  ButtonMore,
  ContainerButtonCenter,
  ContainerSub,
  Subtitle,
} from '../elements/ElementsListExpenses';
import Loading from '../elements/Loading';
import IconCategory from '../elements/IconCategory';
import formattedPrice from '../hooks/formattedPrice';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import Button from '../elements/Button';

const ListExpenses = () => {
  const { loading, expenses } = useGetExpenses();

  return (
    <>
      <Helmet>
        <title>Listado de gastos</title>
      </Helmet>
      <Header>
        <BtnBack ruta="/" />
        <Title>Listado de gastos</Title>
      </Header>

      {loading ? (
        <ContainerLoading>
          <Loading />
        </ContainerLoading>
      ) : (
        <List>
          {expenses.map((expense) => (
            <ElementList key={expense.id}>
              <Category>
                <IconCategory id={expense.category} />
                {expense.category}
              </Category>
              <Description>{expense.description}</Description>
              <Value>{formattedPrice(expense.value)}</Value>
              <ContainerButtons>
                <ButtonAction as={Link} to={`/editar-gasto/${expense.id}`}>
                  <AiFillEdit />
                </ButtonAction>
                <ButtonAction>
                  <AiFillDelete />
                </ButtonAction>
              </ContainerButtons>
            </ElementList>
          ))}
          <ContainerButtonCenter>
            <ButtonMore>Cargar más...</ButtonMore>
          </ContainerButtonCenter>

          {expenses.length === 0 && (
            <ContainerSub>
              <Subtitle>No hay más gastos por mostrar</Subtitle>
              <Button to="/">Agregar gastos</Button>
            </ContainerSub>
          )}
        </List>
      )}

      <TotalExpenses />
    </>
  );
};

export default ListExpenses;
