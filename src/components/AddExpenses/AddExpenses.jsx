import { useEffect, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import getUnixTime from 'date-fns/getUnixTime';
import addExpense from '../../firesbase/addExpense';
import editExpense from '../../firesbase/editExpense';
import {
  ContainerFilters,
  FormExpenses,
  InputBig,
  ContainerButton,
} from '../../elements/ElementsForm';
import ElementListExpenses, {
  ContainerElements,
} from '../../elements/ElementListExpenses';
import { ContainerSelectOptions } from '../../elements/ElementsOptions';
import { TextArea } from '../../elements/ElementsForm';
import Button from '../../elements/Button';
import Loading from '../../components/Loading';
import Alert from '../Alert';
import SelectCategories from '../../components/SelectCategories';
import DatePicker from '../DatePicker';
import useForm from '../../hooks/useForm';
import useUserContext from '../../hooks/useUserContext';
import { useNavigate } from 'react-router-dom';
import fromUnixTime from 'date-fns/fromUnixTime';

const AddExpenses = ({ expense }) => {
  const dateNew = new Date();
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

  //custom hook useForm
  const { values, handleChange, setValues } = useForm(initialState);

  //Agrego gasto.
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

  //Editar gasto.
  const editNewExpense = (e) => {
    e.preventDefault();
    const expensesEdit = {
      ...values,
      category,
      date: getUnixTime(date),
      idUser,
      id: expense?.id,
    };

    const { value, description, date: dateExpenses } = expensesEdit;
    if (value === '' || description === '' || dateExpenses === '') {
      setError(true);
    } else {
      setError(false);
      editExpense(e, expensesEdit);
      navigate('/listado-gastos');
    }
  };

  //Compruebo si hay algún gasto.
  useEffect(() => {
    //De ser así, establezco todo el state con los valores del gasto.
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
    <>
      <ContainerElements>
        <ElementListExpenses
          text="Gastos por categoria"
          path="/categorias"
          type="categories"
        />
        <ElementListExpenses text="Listado de gastos" path="/listado-gastos" />
      </ContainerElements>
      <FormExpenses
        onSubmit={expense ? (e) => editNewExpense(e) : handleSubmit}
      >
        {error && <Alert type="error" msg="Los campos son obligatorios" />}
        {success && <Alert msg="Gasto agregado" />}

        <ContainerFilters>
          <ContainerSelectOptions>
            <label htmlFor="">Seleccioná la categoria:</label>
            <SelectCategories category={category} setCategory={setCategory} />
          </ContainerSelectOptions>
          <div>
            <label htmlFor="">Seleccioná la fecha:</label>
            <DatePicker currentDate={date} setDate={setDate} />
          </div>
        </ContainerFilters>
        <div>
          <TextArea
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
      </FormExpenses>
    </>
  );
};

export default AddExpenses;
