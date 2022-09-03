import { Header } from "../styles/Container.Styles";
import { NavButton, ImgLogo } from "../styles/Elements.Styles";
import logo from '../../public/choro.svg';

function NavBar() {

  return (
    <Header>
      <ImgLogo src={logo} alt="logo" />
      <NavButton>settings</NavButton>
    </Header>
  )
}

export default NavBar;
