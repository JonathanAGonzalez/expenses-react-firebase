import { useEffect, useState } from 'react';
import getUnixTime from 'date-fns/getUnixTime';
import { IoMdAdd } from 'react-icons/io';
import {
  ContainerFilters,
  Form,
  Input,
  InputBig,
  ContainerButton,
} from '../elements/ElementsForm';
import Button from '../elements/Button';
import Loading from '../elements/Loading';
import Alert from '../elements/Alert';
import SelectCategories from '../elements/SelectCategories';
import DatePicker from './DatePicker';
import useForm from '../hooks/useForm';
import useUserContext from '../hooks/useUserContext';
import addExpense from '../firesbase/addExpense';
import { useNavigate } from 'react-router-dom';
import editExpense from '../firesbase/editExpense';
import fromUnixTime from 'date-fns/fromUnixTime';

const dateNew = new Date();

const AddExpenses = ({ expense }) => {
  const idUser = useUserContext().stateUserContext.uid;
  const [category, setCategory] = useState({ id: 'home', text: 'Hogar' });
  const [date, setDate] = useState(dateNew);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const initialState = {
    value: '',
    description: '',
    category: category.id,
  };

  const { values, handleChange, setValues } = useForm(initialState);
  const expensesEdit = {
    ...values,
    category,
    date: getUnixTime(date),
    idUser,
    id: expense?.id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenses = { ...values, category, date: getUnixTime(date), idUser };

    const { value, description, category: cat } = expenses;

    if (value !== '' && description !== '' && cat !== '') {
      setLoading(true);
      addExpense({ ...expenses, value: parseFloat(value).toFixed(2) }).then(
        () => {
          setLoading(false);
          setError(false);
          setValues(initialState);
          setDate(dateNew);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 2000);
        }
      );
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const editNewExpense = (e) => {
    e.preventDefault();
    const { value, description, date } = expensesEdit;
    if (value === '' || description === '' || date === '') {
      setError(true);
    } else {
      setError(false);
      editExpense(e, expensesEdit);
      navigate('/listado-gastos');
    }
  };

  useEffect(() => {
    //Compruebo si hay algún gasto.
    //De ser así establezco todo el state con los valores del gasto.
    if (expense && expense.idUser === idUser) {
      setValues({
        value: expense.value,
        description: expense.description,
        category: expense.category.id,
      });
      setCategory({ id: expense.category.id, text: expense.category.text });
      setDate(fromUnixTime(expense.date));
    } else {
      navigate('/');
    }
  }, [expense, idUser, navigate, setValues]);

  return (
    <Form onSubmit={expense ? (e) => editNewExpense(e) : handleSubmit}>
      {error && <Alert type="error" msg="Los campos son obligatorios" />}
      {success && <Alert type="exito" msg="producto agregado" />}

      <ContainerFilters>
        <SelectCategories category={category} setCategory={setCategory} />
        <DatePicker currentDate={date} setDate={setDate} />
      </ContainerFilters>
      <div>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Descripción del gasto"
          onChange={handleChange}
          value={values.description}
        />
        <InputBig
          type="number"
          name="value"
          id="value"
          placeholder="$0.00"
          onChange={handleChange}
          value={values.value}
        />
      </div>
      <ContainerButton>
        {!loading ? (
          <Button as="button" type="submit" primary conIcono>
            {expense ? 'Editar gasto' : 'Agregar gasto'}
            <IoMdAdd />
          </Button>
        ) : (
          <Loading />
        )}
      </ContainerButton>
    </Form>
  );
};

export default AddExpenses;
