import { Title, Header } from '../elements/Header';
import { Helmet } from 'react-helmet-async';
import BtnBack from '../elements/BtnBack';
import TotalExpenses from './TotalExpenses';
import useGetExpensesOfTheMonthByCategory from '../hooks/useGetExpensesOfTheMonthByCategory';
import {
  ListOfCategory,
  ElementListCategories,
  Category,
  Value,
} from '../elements/ElementsListExpenses';
import formattedPrice from '../hooks/formattedPrice';
import IconsCategories from '../elements/IconCategory';
const ExpensesByCategory = () => {
  const expensesByCategory = useGetExpensesOfTheMonthByCategory();
  const categories = [
    { id: 'food', text: 'Comida' },
    { id: 'billsPayments', text: 'Cuentas-pagos' },
    { id: 'home', text: 'Hogar' },
    { id: 'transport', text: 'Transporte' },
    { id: 'healt', text: 'Salud e Higiene' },
    { id: 'buys', text: 'Compras' },
  ];
  return (
    <>
      <Helmet>
        <title>Gastos por categoría</title>
      </Helmet>
      <Header>
        <BtnBack route="/" />
        <Title>Gasto por categoria</Title>
      </Header>
      <ListOfCategory>
        {expensesByCategory.map(({ id, value }) => (
          <ElementListCategories key={id}>
            {categories.map(
              (category) =>
                category.id === id && (
                  <Category key={category.id}>
                    {<IconsCategories id={category.id} />} {category.text}
                  </Category>
                )
            )}
            <Value>{formattedPrice(value)}</Value>
          </ElementListCategories>
        ))}
      </ListOfCategory>
      <TotalExpenses />
    </>
  );
};

export default ExpensesByCategory;
