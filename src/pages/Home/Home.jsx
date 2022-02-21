import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AddExpenses from '../../components/AddExpenses';
import NavBar from '../../components/NavBar';
import TotalExpenses from '../../components/TotalExpenses';
import BtnSignOut from '../../elements/BtnSignOut';
import { Header, Title } from '../../elements/Header';
import useIsMobile from '../../hooks/useResize';
import useUserContext from '../../hooks/useUserContext';
function Home() {
  const { stateUserContext } = useUserContext();
  const [menuMobile, setMenuMobile] = useState(false);
  const screenSize = useIsMobile();

  return (
    <>
      <Helmet>
        <title>Bienvenido {stateUserContext.email}</title>
      </Helmet>
      <Header>
        <Title>Bienvenido {stateUserContext.email}</Title>
        {screenSize && <BtnSignOut />}
        <NavBar show={menuMobile} setMenuMobile={setMenuMobile} />
      </Header>
      <AddExpenses />
      <TotalExpenses />
    </>
  );
}

export default Home;
