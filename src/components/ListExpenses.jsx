import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { formattedDate, sameDates } from '../hooks/formattedDate';
import useGetExpenses from '../hooks/useGetExpenses';
import formattedPrice from '../hooks/formattedPrice';
import {
  List,
  ElementList,
  ContainerLoading,
  Category,
  Description,
  Value,
  Date,
  ContainerButtons,
  ButtonAction,
  ButtonMore,
  ContainerButtonCenter,
  ContainerSub,
  Subtitle,
} from '../elements/ElementsListExpenses';
import { Header, Title } from '../elements/Header';
import BtnBack from '../elements/BtnBack';
import Loading from '../elements/Loading';
import IconCategory from '../elements/IconCategory';
import Button from '../elements/Button';
import deleteExpense from '../firesbase/deleteExpense';
import TotalExpenses from './TotalExpenses';

const ListExpenses = () => {
  //Obtengo todos los gastos con el custom hook.
  const {
    expenses: { loading },
    expenses: data,
    moreToLoad,
    getMoreExpenses,
  } = useGetExpenses();

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
          {data.expenses.map(
            ({ category, date, value, id, description }, index) => (
              <div key={id}>
                {!sameDates(data.expenses, index, date) && (
                  <Date>{formattedDate(date)}</Date>
                )}
                <ElementList>
                  <Category>
                    <IconCategory id={category.id} />
                    {category.text}
                  </Category>
                  <Description>{description}</Description>
                  <Value>{formattedPrice(value)}</Value>
                  <ContainerButtons>
                    <ButtonAction as={Link} to={`/editar-gasto/${id}`}>
                      <AiFillEdit />
                    </ButtonAction>
                    <ButtonAction onClick={() => deleteExpense(id)}>
                      <AiFillDelete />
                    </ButtonAction>
                  </ContainerButtons>
                </ElementList>
              </div>
            )
          )}
          {moreToLoad && (
            <ContainerButtonCenter>
              <ButtonMore onClick={getMoreExpenses}>Cargar más...</ButtonMore>
            </ContainerButtonCenter>
          )}

          {data.expenses.length === 0 && (
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
