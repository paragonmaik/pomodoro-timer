import { useState } from 'react';

const options: object = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
}

function PomodoroOptions() {
  const [timerOptions, setTimerOptions] = useState(options);

  const handleMode = () => {

  }

  return (
    <>
      <button
        type='button'
        id='pomochoro'
        onClick={ handleMode }
      >
        Pomochoro
      </button>
      <button
        type='button'
        id='shortBreak'
        onClick={ handleMode }
      >
        Short Break
      </button>
      <button
        type='button'
        id='longBreak'
        onClick={ handleMode }
      >
        Long break
      </button>
    </>
  )
}

export default PomodoroOptions;
