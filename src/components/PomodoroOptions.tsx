import React, { useState } from 'react';
import { timerOptions } from '../typescript/types';

function PomodoroOptions() {
  const defaultOptions: timerOptions = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  }
  const [timerOptions, setTimerOptions] = useState(defaultOptions);

  const switchMode = (mode: string) => {
    console.log(defaultOptions.pomodoro);
  }

  const handleMode = (event: React.MouseEvent) => {
    const mode: string = event.currentTarget.id;
    switchMode(mode);
  }

  return (
    <>
      <button
        type='button'
        id='pomochoro'
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
