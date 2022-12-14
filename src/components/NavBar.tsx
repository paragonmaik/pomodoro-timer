import { Header } from '../styles/Container.Styles';
import { NavButton, ImgLogo } from '../styles/Elements.Styles';
import logo from '../../public/choro.svg';
import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';

function NavBar() {
  const { setIsOpen, isStartAvailable, darkMode } = useContext(TimerContext);

  return (
    <Header>
      <ImgLogo src={logo} alt="logo" />
      <NavButton
        darkMode={darkMode}
        disabled={!isStartAvailable}
        type="button"
        onClick={() => setIsOpen(true) }
      >
        Settings
      </NavButton>
    </Header>
  )
}

export default NavBar;
