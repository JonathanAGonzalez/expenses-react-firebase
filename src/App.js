import { Helmet } from 'react-helmet-async';
import AddExpenses from './components/AddExpenses';
import TotalExpenses from './components/TotalExpenses';
import BtnSignOut from './elements/BtnSignOut';
import Button from './elements/Button';
import {
  Header,
  ContainerButtons,
  ContainerHeader,
  Title,
} from './elements/Header';

function App() {
  return (
    <>
      <Helmet>
        <title>Bienvenido Jonas</title>
      </Helmet>
      <Header>
        <ContainerHeader>
          <div>
            <Title>Agregá tus gastos</Title>
          </div>
        </ContainerHeader>
        <ContainerButtons>
          <Button to="/categorias">Categorías</Button>
          <Button to="/listado-gastos">Listado de gastos</Button>
          <BtnSignOut />
        </ContainerButtons>
      </Header>
      <AddExpenses />
      <TotalExpenses />
    </>
  );
}

export default App;
