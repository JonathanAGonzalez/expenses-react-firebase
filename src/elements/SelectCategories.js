import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  ContainerSelect,
  Option,
  Options,
  OptionSelect,
} from "./ElementsOptions";

const categories = [
  { id: "comida", text: "Comida" },
  { id: "cuentas y pagos", text: "Cuentas y pagos" },
  { id: "hogar", text: "Hogar" },
  { id: "transporte", text: "Transporte" },
  { id: "ropa", text: "Ropa" },
  { id: "salud e higiene", text: "Salud e Higiene" },
  { id: "compras", text: "Compras" },
  { id: "diversion", text: "Diversion" },
];

const SelectCategories = ({ category, setCategory }) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <ContainerSelect onClick={() => setShowSelect(!showSelect)}>
      <OptionSelect>
        {category}
        <AiFillCaretDown />
      </OptionSelect>
      {showSelect && (
        <Options>
          {categories.map((category) => (
            <Option key={category.id} onClick={() => setCategory(category.id)}>
              {category.text}
            </Option>
          ))}
        </Options>
      )}
    </ContainerSelect>
  );
};

export default SelectCategories;
