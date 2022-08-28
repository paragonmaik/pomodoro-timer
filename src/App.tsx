import Timer from './components/Timer';
import PomodoroOptions from './components/PomodoroOptions';
// import { useTimerContext } from './context/TimerContext';
import { TimerContext } from './context/TimerContext';
import './App.css'
import { useContext } from 'react';

function App() {
  const { timerData } = useContext(TimerContext);
  console.log(timerData);
  return (
    <>
      <h1>pomodoro</h1>
      <PomodoroOptions />
      <Timer {...timerData} />
    </>
  )
}

export default App;
