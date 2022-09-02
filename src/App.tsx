import Timer from './components/Timer';
import PomodoroOptions from './components/PomodoroOptions';
import { TimerContext } from './context/TimerContext';
import { TimerSettings } from './typescript/types';
import './App.css'
import { useContext } from 'react';

function App() {
  const { timerData,
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
      <progress
        value={+timerData[timerData.mode as keyof TimerSettings] * 60 - timerData.timeRemaining.total}
        max={+timerData[timerData.mode as keyof TimerSettings] * 60}
        />
      <div></div>
      <Timer {...timerData.timeRemaining} />
      <button
        onClick={ () => handleStartButton() }
        type="button">
          {isStartAvailable ? 'Start' : 'Stop'}
        </button>
    </>
  )
}

export default App;
