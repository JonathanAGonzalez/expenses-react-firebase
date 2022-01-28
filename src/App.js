import { Helmet } from 'react-helmet-async';
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
            <Title>Agendá tus gastos</Title>
          </div>
        </ContainerHeader>
        <ContainerButtons>
          <Button to="/categorias">Categorías</Button>
          <Button to="/listado-gastos">Listado de gastos</Button>
          <Button to="x"></Button>
        </ContainerButtons>
      </Header>
    </>
  );
}

export default App;
