import { createContext, useState } from 'react';
import { timer, TimerContextProps, TimerContextProviderProps, TimerOptions } from '../typescript/types';

export const TimerContext = createContext({} as TimerContextProps);

const options: TimerOptions = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  longBreakInterval: 4,
  mode: 'pomodoro',
  timeRemaining: {
    total: 1500,
    minutes: 25,
    seconds: 0,
  }
}

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [defaultOptions] = useState(options);
  const [timerData, setTimerData] = useState(options.timeRemaining as timer);

  const switchMode = (mode: string) => {
    defaultOptions.mode = mode;
    defaultOptions.timeRemaining = {
      total: Number(defaultOptions[mode as keyof TimerOptions]) * 60,
      minutes: Number(defaultOptions[mode as keyof TimerOptions]),
      seconds: 0,
    }
    setTimerData(defaultOptions.timeRemaining);
  }

  const handleMode = (event: React.MouseEvent) => {
    const mode: string = event.currentTarget.id;
    switchMode(mode);
  }

  return <TimerContext.Provider value={
    {
      timerData,
      defaultOptions,
      setTimerData,
      switchMode,
      handleMode,
    }
    }>
    {children}
  </TimerContext.Provider>
};

