import Timer from './components/Timer';
import PomodoroOptions from './components/PomodoroOptions';
import { TimerContext } from './context/TimerContext';
import './App.css'
import { useContext } from 'react';

function App() {
  const { timerData, setTimerData, startTimer } = useContext(TimerContext);
  // setTimerData({ total: 1499, minutes: 24, seconds: 59 })
  console.log(timerData);
  return (
    <>
      <h1>pomodoro</h1>
      <PomodoroOptions />
      <Timer {...timerData} />
      <button
        onClick={ startTimer }
        type="button">
          Start
        </button>
    </>
  )
}

export default App;
