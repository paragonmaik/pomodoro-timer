import { useContext } from 'react';
import { TimerContext } from './context/TimerContext';
import { AppContainer } from './styles/Container.Styles';
import Home from './pages/Home';

function App() {
  const { darkMode } = useContext(TimerContext)
  return (
    <AppContainer
      darkMode={darkMode}
    >
      <Home />
    </AppContainer>
  )
}

export default App;
