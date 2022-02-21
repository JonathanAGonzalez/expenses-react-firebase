import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { categories } from '../../data/categories';
import {
  ContainerSelect,
  Option,
  Options,
  OptionSelect,
} from '../../elements/ElementsOptions';
import IconCategory from '../../elements/IconCategory';

const SelectCategories = ({ category, setCategory }) => {
  const [showSelect, setShowSelect] = useState(false);
  return (
    <ContainerSelect onClick={() => setShowSelect(!showSelect)}>
      <OptionSelect>
        {category.text}
        <AiFillCaretDown />
      </OptionSelect>
      {showSelect && (
        <Options>
          {categories.map((category) => (
            <Option
              key={category.id}
              onClick={() =>
                setCategory({ id: category.id, text: category.text })
              }
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
