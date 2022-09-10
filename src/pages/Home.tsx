import { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';
import { TimerSettings } from '../typescript/types';
import { TimerCardContainer,
  GenericContainer, AppWrapper,
  BarContainer } from '../styles/Container.Styles';
import { StartButton } from '../styles/Elements.Styles';
import Timer from '../components/Timer';
import NavBar from '../components/NavBar';
import PomodoroSelectors from '../components/PomodoroSelectors';
import TodoList from '../components/TodoList';
import TimerSettingsModal from '../components/TimerSettingsModal';

function Home() {
  const { timerData,
    handleStartTimer,
    isStartAvailable,
    setIsStartAvailable,
    stopTimer,
    isOpen,
    darkMode,
  } = useContext(TimerContext);

  const handleStartButton = () => {
    if (isStartAvailable) {
      setIsStartAvailable(false);
      return handleStartTimer();
    }
    setIsStartAvailable(true);
    stopTimer();
  }
  
  return (
    <>
      <AppWrapper>
        <NavBar />
        <BarContainer
          darkMode={darkMode}
        >
          <progress
            value={+timerData[timerData.mode as keyof TimerSettings] * 60 - timerData.timeRemaining.total}
            max={+timerData[timerData.mode as keyof TimerSettings] * 60}
          />
        </BarContainer>
        <TimerCardContainer
          darkMode={darkMode}
        >
          <PomodoroSelectors />
          <Timer {...timerData.timeRemaining} />
            <GenericContainer>
              <StartButton
                darkMode={darkMode}
                onClick={ handleStartButton }
                type="button"
                >
                  {isStartAvailable ? 'START' : 'STOP'}
              </StartButton>
            </GenericContainer>
        </TimerCardContainer>
        <TodoList />
        {isOpen && <TimerSettingsModal />}
      </AppWrapper>
    </>
  )
}

export default Home;
