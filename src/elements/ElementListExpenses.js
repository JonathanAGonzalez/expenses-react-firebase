import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundMoney from '../assets/images/money.svg';
import backgroundCategories from '../assets/images/categories.svg';
import theme from '../theme';

const background = {
  categories: backgroundCategories,
  money: backgroundMoney,
};

const ContainerElementList = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  @media screen and (max-width: 48rem) {
    display: none;
  }
`;

const ElementList = styled.article`
  background: linear-gradient(to right, ${theme.purple}, ${theme.grayStrong});
  border-radius: 0.31rem;
  padding: 2rem;
  min-width: 18.75rem;
  max-width: 18.75rem;
  margin: 1rem;
  position: relative;
  &::before {
    content: '';
    background: url(${(props) => background[props.type] || background.money});
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100%;
  }
`;

const ParagraphElementList = styled.p`
  color: ${theme.white};
`;

export const ContainerElements = styled.article`
  display: flex;
`;

const ElementListExpenses = ({
  text = 'Falta texto',
  mount = '',
  path = '/',
  type = 'money',
}) => {
  return (
    <ContainerElementList to={path}>
      <ElementList type={type}>
        <ParagraphElementList>{text}</ParagraphElementList>
        <ParagraphElementList>{mount}</ParagraphElementList>
      </ElementList>
    </ContainerElementList>
  );
};

export default ElementListExpenses;
