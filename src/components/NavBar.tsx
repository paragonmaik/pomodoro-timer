import { Header } from '../styles/Container.Styles';
import { NavButton, ImgLogo } from '../styles/Elements.Styles';
import logo from '../../public/choro.svg';
import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';

function NavBar() {
  const { setIsOpen } = useContext(TimerContext);

  return (
    <Header>
      <ImgLogo src={logo} alt="logo" />
      <NavButton
        type="button"
        onClick={() => setIsOpen(true) }
      >
        settings
      </NavButton>
    </Header>
  )
}

export default NavBar;
