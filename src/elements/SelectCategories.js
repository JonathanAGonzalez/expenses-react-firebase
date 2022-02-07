import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  ContainerSelect,
  Option,
  Options,
  OptionSelect,
} from "./ElementsOptions";
import IconCategory from "./IconCategory";

const categories = [
  { id: "food", text: "Comida" },
  { id: "billsPayments", text: "Cuentas-pagos" },
  { id: "home", text: "Hogar" },
  { id: "transport", text: "Transporte" },
  { id: "healt", text: "Salud e Higiene" },
  { id: "buys", text: "Compras" },
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
            <Option
              key={category.id}
              onClick={() => setCategory(category.text)}
            >
              <IconCategory id={category.id} />
              {category.text}
            </Option>
          ))}
        </Options>
      )}
    </ContainerSelect>
  );
};

export default SelectCategories;
