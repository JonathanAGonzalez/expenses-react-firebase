import { useState } from 'react';
import fromUnixTime from 'date-fns/fromUnixTime';
import getUnixTime from 'date-fns/getUnixTime';
import { IoMdAdd } from 'react-icons/io';
import DatePicker from './DatePicker';
import Button from '../elements/Button';
import {
  ContainerFilters,
  Form,
  Input,
  InputBig,
  ContainerButton,
} from '../elements/ElementsForm';
import SelectCategories from '../elements/SelectCategories';
import useForm from '../hooks/useForm';
import addExpense from '../firesbase/addExpense';
import useUserContext from '../hooks/useUserContext';
const dateNew = new Date();

const AddExpenses = () => {
  const idUser = useUserContext().stateUserContext.uid;
  const [category, setCategory] = useState('hogar');
  const [date, setDate] = useState(dateNew);
  const { values, handleChange } = useForm({
    value: '',
    description: '',
    category,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenses = { ...values, category, date: getUnixTime(date), idUser };

    const { value, description, category: cat } = expenses;

    if (value !== '' && description !== '' && cat !== '') {
      addExpense({ ...expenses, value: parseFloat(value).toFixed(2) });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
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
        <Button as="button" type="submit" primary conIcono>
          Agregar Gasto
          <IoMdAdd />
        </Button>
      </ContainerButton>
    </Form>
  );
};

export default AddExpenses;
