import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import { GenericContainer } from '../styles/Container.Styles';
import { ModeButton } from '../styles/Elements.Styles';

function PomodoroSelectors() {
  const { handleMode, darkMode } = useContext(TimerContext);

  return (
    <GenericContainer>
      <ModeButton
        darkMode={darkMode}
        type='button'
        id='pomodoro'
        onClick={ (event) => handleMode(event) }
      >
        Pomochoro
      </ModeButton>
      <ModeButton
        darkMode={darkMode}
        type='button'
        id='shortBreak'
        onClick={ (event) => handleMode(event) }
      >
        Short Break
      </ModeButton>
      <ModeButton
        darkMode={darkMode}
        type='button'
        id='longBreak'
        onClick={ (event) => handleMode(event) }
      >
        Long break
      </ModeButton>
    </GenericContainer>
  )
}

export default PomodoroSelectors;
