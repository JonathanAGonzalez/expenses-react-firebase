import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';
import Container from './elements/Container';
import EditExpenses from './components/EditExpenses';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ListExpenses from './components/ListExpenses';
import ExpensesByCategory from './components/ExpensesByCategory';
import favicon from './assets/images/logo.png';
import './index.css';
import Background from './elements/Background';
import { UserContextProvider } from './context/UserContext';
import ProtectedRoute from './hooks/ProtectedRoute';

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
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <App />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/editar-gastos"
                  element={
                    <ProtectedRoute>
                      <EditExpenses />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/editar-gasto/:id"
                  element={
                    <ProtectedRoute>
                      <EditExpenses />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/listado-gastos"
                  element={
                    <ProtectedRoute>
                      <ListExpenses />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/categorias"
                  element={
                    <ProtectedRoute>
                      <ExpensesByCategory />
                    </ProtectedRoute>
                  }
                />

                <Route path="/iniciar-sesion" element={<SignIn />} />
                <Route path="/crear-cuenta" element={<SignUp />} />
              </Routes>
            </Container>
          </HelmetProvider>
        </Router>
        <Background />
      </UserContextProvider>
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
