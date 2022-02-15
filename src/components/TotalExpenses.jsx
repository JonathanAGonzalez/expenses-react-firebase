import styled from 'styled-components';
import formattedPrice from '../hooks/formattedPrice';
import useGetExpensesOfTheMonth from '../hooks/useGetExpensesOfTheMonth';
const BarTotal = styled.div`
  background: #222;
  font-size: 1.25rem; /* 20px */
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.62rem 2.25rem; /* 10px 40px */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 31.25rem) {
    /* 500px */
    flex-direction: column;
    font-size: 14px;
  }
`;

const TotalExpenses = () => {
  //Obtengo los gastos del mes
  const expenses = useGetExpensesOfTheMonth();

  const total = expenses.reduce((ac, curr) => {
    const currentValue = Number(curr.value);
    return ac + currentValue;
  }, 0);

  return (
    <BarTotal>
      <p>Total gastado en el mes:</p>
      <p>{formattedPrice(total)}</p>
    </BarTotal>
  );
};

export default TotalExpenses;
