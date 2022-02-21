import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { UserContextProvider } from '../context/UserContext';
import favicon from '../assets/images/logo.png';
import WebFont from 'webfontloader';
import EditExpenses from '../pages/EditExpenses';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Container from '../elements/Container';
import ListExpenses from '../pages/ListExpenses';
import ExpensesByCategory from '../pages/ExpensesByCategory';
import Home from '../pages/Home';
import ProtectRoute from '../hooks/ProtectRoute';

WebFont.load({
  google: {
    families: ['Inter:400,600,700', 'sans-serif'],
  },
});

const Index = () => {
  return (
    <>
      <UserContextProvider>
        <Router>
          <HelmetProvider>
            <Helmet>
              <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Helmet>
            <Container>
              <Routes>
                <Route element={<ProtectRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/editar-gastos" element={<EditExpenses />} />
                  <Route path="/editar-gasto/:id" element={<EditExpenses />} />
                  <Route path="/listado-gastos" element={<ListExpenses />} />
                  <Route path="/categorias" element={<ExpensesByCategory />} />
                </Route>

                <Route path="/iniciar-sesion" element={<SignIn />} />
                <Route path="/crear-cuenta" element={<SignUp />} />
              </Routes>
            </Container>
          </HelmetProvider>
        </Router>
      </UserContextProvider>
    </>
  );
};

export default Index;
