import {
  ListCategory,
  ElementListCategories,
  Category,
  Value,
} from '../../elements/ElementsListExpenses';
import useGetExpensesOfTheMonthByCategory from '../../hooks/useGetExpensesOfTheMonthByCategory';
import formattedPrice from '../../hooks/formattedPrice';
import IconsCategories from '../../elements/IconCategory';
import { categories } from '../../data/categories';

const ListOfCategory = () => {
  const expensesByCategory = useGetExpensesOfTheMonthByCategory();

  return (
    <ListCategory>
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
    </ListCategory>
  );
};

export default ListOfCategory;
