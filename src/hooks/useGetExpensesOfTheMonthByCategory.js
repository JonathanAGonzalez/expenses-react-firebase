import { useEffect, useState } from 'react';
import useGetExpensesOfTheMonth from './useGetExpensesOfTheMonth';

const useGetExpensesOfTheMonthByCategory = () => {
  const [expensesByCategory, setExpensesByCategory] = useState([]);
  const expensesOfMonth = useGetExpensesOfTheMonth();

  useEffect(() => {
    const initialValues = {
      food: 0,
      billsPayments: 0,
      home: 0,
      transport: 0,
      healt: 0,
      buys: 0,
    };

    const sum = expensesOfMonth.reduce((previousValue, currentValue) => {
      const currentCategory = currentValue.category.id;
      const currentValueCategory = Math.trunc(currentValue.value);

      previousValue[currentCategory] += currentValueCategory;

      return previousValue;
    }, initialValues);

    const objectCategoriesValues = Object.keys(sum).map((key) => ({
      id: key,
      value: sum[key],
    }));

    setExpensesByCategory(objectCategoriesValues);
  }, [expensesOfMonth]);

  return expensesByCategory;
};

export default useGetExpensesOfTheMonthByCategory;
