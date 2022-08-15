import './App.css'
import Timer from './components/Timer';
import PomodoroOptions from './components/PomodoroOptions';

function App() {

  return (
    <>
      <h1>pomodoro</h1>
      <PomodoroOptions />
      <Timer minutes={25} seconds={0} />
    </>
  )
}

export default App
