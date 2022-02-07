import { MdFoodBank, MdPayments } from "react-icons/md";
import { GiHealthNormal, GiBuyCard } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { FaBus } from "react-icons/fa";

const iconsCategories = {
  food: <MdFoodBank />,
  billsPayments: <MdPayments />,
  home: <AiFillHome />,
  transport: <FaBus />,
  healt: <GiHealthNormal />,
  buys: <GiBuyCard />,
};

const IconCategory = ({ id }) => {
  return <>{iconsCategories[id]}</>;
};

export default IconCategory;
