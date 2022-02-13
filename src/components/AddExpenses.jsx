import { useState } from 'react';
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
const dateNew = new Date();

const AddExpenses = () => {
  const idUser = useUserContext().stateUserContext.uid;
  const [category, setCategory] = useState({ id: 'home', text: 'Hogar' });
  const [date, setDate] = useState(dateNew);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const initialState = {
    value: '',
    description: '',
    category: category.id,
  };
  const { values, handleChange, setValues } = useForm(initialState);

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
        }
      );
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <Alert type="error" msg="Los campos son obligatorios" />}
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
            Agregar Gasto
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
