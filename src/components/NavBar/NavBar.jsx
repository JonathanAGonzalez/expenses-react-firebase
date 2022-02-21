import styled from 'styled-components';
import { RiMenu4Line } from 'react-icons/ri';
import theme from '../../theme';
import { path } from '../../data/path';
import { Link } from 'react-router-dom';
import BtnSignOut from '../../elements/BtnSignOut';
import BtnClose from '../../elements/BtnClose';

const ContainerNav = styled.div`
  display: none;
  @media screen and (max-width: 48rem) {
    display: block;
  }
`;

const Nav = styled.nav`
  background: ${theme.grayStrong};
  position: fixed;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
  z-index: 100;
  transition: ease 0.5s;
  transform: translateX(${(props) => (props.show === 'true' ? '0' : '100%')});
`;

const ContainerList = styled.ul`
  color: ${theme.white};
  padding: 0.5rem 1rem;
`;

const ListNav = styled.li`
  list-style: none;
  margin-top: 1.5rem;
`;

const ListAnchor = styled(Link)`
  list-style: none;
  margin-top: 1rem;
  text-decoration: none;
  color: ${theme.white};
`;

const IconNav = styled(RiMenu4Line)`
  font-size: 2rem;
  display: block;
  align-self: flex-end;
`;

const NavBar = ({ show, setMenuMobile }) => {
  const valid = String(show);

  return (
    <ContainerNav>
      <IconNav onClick={() => setMenuMobile(!show)} />
      <Nav show={valid}>
        <BtnClose setMenuMobile={setMenuMobile} show={show} />
        <ContainerList>
          {path.map((item, index) => (
            <ListNav key={index}>
              <ListAnchor to={item.path}>{item.name}</ListAnchor>
            </ListNav>
          ))}
          <BtnSignOut />
        </ContainerList>
      </Nav>
    </ContainerNav>
  );
};

export default NavBar;
