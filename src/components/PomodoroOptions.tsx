import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerContext';

function PomodoroOptions() {
  const { handleMode } = useContext(TimerContext);

  return (
    <>
      <button
        type='button'
        id='pomodoro'
        onClick={ (event) => handleMode(event) }
      >
        Pomochoro
      </button>
      <button
        type='button'
        id='shortBreak'
        onClick={ (event) => handleMode(event) }
      >
        Short Break
      </button>
      <button
        type='button'
        id='longBreak'
        onClick={ (event) => handleMode(event) }
      >
        Long break
      </button>
    </>
  )
}

export default PomodoroOptions;
