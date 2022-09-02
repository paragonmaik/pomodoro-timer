import Timer from './components/Timer';
import PomodoroOptions from './components/PomodoroOptions';
import { TimerContext } from './context/TimerContext';
import './App.css'
import { useContext } from 'react';

function App() {
  const { timerData: { timeRemaining },
    handleStartTimer,
    isStartAvailable,
    setIsStartAvailable,
    stopTimer,
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
      <h1>pomodoro</h1>
      <PomodoroOptions />
      <Timer {...timeRemaining} />
      <button
        onClick={ () => handleStartButton() }
        type="button">
          {isStartAvailable ? 'Start' : 'Stop'}
        </button>
    </>
  )
}

export default App;
