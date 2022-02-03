import { IoMdAdd } from "react-icons/io";
import Button from "../elements/Button";
import {
  ContainerFilters,
  Form,
  Input,
  InputBig,
  ContainerButton,
} from "../elements/ElementsForm";
import useForm from "../hooks/useForm";

const AddExpenses = () => {
  const { values, handleChange } = useForm({
    value: "",
    description: "",
  });

  return (
    <Form>
      <ContainerFilters>
        <p>Select</p>
        <p>datepickeer</p>
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
