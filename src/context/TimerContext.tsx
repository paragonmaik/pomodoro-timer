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

const getRemainingTimer = (endTime: number) => {
  const currentTime = Date.parse(new Date().toString());
  const timeDiff = +endTime - currentTime;
  console.log(typeof currentTime);
  console.log(timeDiff);
  const total = Number.parseInt((timeDiff / 1000).toString(), 10);
  const minutes = Number.parseInt(((total / 60) % 60).toString(), 10);
  const seconds = Number.parseInt((total % 60).toString(), 10);
  console.log(total, minutes, seconds)
  return {
    total,
    minutes,
    seconds,
  }
}

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [defaultOptions] = useState(options);
  const [interval, setIntervalValue] = useState();
  const [timerData, setTimerData] = useState(options.timeRemaining as timer);

  const startTimer = () => {
    const { total, minutes, seconds } = timerData;
    const endTime = +Date.parse(new Date().toString()) + total * 1000;
    console.log(endTime, 'teste');
    setInterval(() => {
      getRemainingTimer(endTime);
      setTimerData(getRemainingTimer(endTime));

      if (total <= 0) {
        clearInterval(interval)
      }
    }, 1000)

  }

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
      startTimer,
    }
    }>
    {children}
  </TimerContext.Provider>
};

