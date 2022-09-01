import { createContext, useState } from 'react';
import { timer, TimerContextProps, TimerContextProviderProps, TimerOptions } from '../typescript/types';

export const TimerContext = createContext({} as TimerContextProps);

const options: TimerOptions = {
  pomodoro: 25,
  shortBreak: 5,
  longBreak: 15,
  sessions: 0,
  longBreakInterval: 4,
  mode: 'pomodoro',
  timeRemaining: {
    total: 1500,
    minutes: 25,
    seconds: 0,
  }
}

options.timeRemaining = {
  total: options.pomodoro * 60,
  minutes: options.pomodoro,
  seconds: 0,
}

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [isStartAvailable, setIsStartAvailable] = useState(true);
  const [defaultOptions] = useState(options);
  const [interval, setIntervalValue] = useState(0);
  const [timerData, setTimerData] = useState(options.timeRemaining as timer);
  const [shouldAutoStart, setShouldAutoStart] = useState(false);

  const getRemainingTimer = (endTime: number) => {
    const currentTime = Date.parse(new Date().toString());
    const timeDiff = +endTime - currentTime;

    const total = Number.parseInt((timeDiff / 1000).toString(), 10);
    const minutes = Number.parseInt(((total / 60) % 60).toString(), 10);
    const seconds = Number.parseInt((total % 60).toString(), 10);

    return {
      total,
      minutes,
      seconds,
    }
  }

  const autoSwitch = (mode: string, sessions: number, breakInterval: number) => {
    switch (mode) {
      case 'pomodoro':
        if (sessions % breakInterval === 0) {
          switchMode('longBreak');
        } else {
          switchMode('shortBreak');
        }
        break;
        default:
          switchMode('pomodoro');
    }
    startTimer();
  };

  const startTimer = () => {
    const { total } = defaultOptions.timeRemaining;
    const endTime = +Date.parse(new Date().toString()) + total * 1000
    console.log(defaultOptions.mode, defaultOptions.timeRemaining);
    const intervalId = setInterval(() => {
      getRemainingTimer(endTime);
      const timerObj = getRemainingTimer(endTime)
      console.log(timerObj);
      setTimerData(timerObj);
      if (timerObj.total <= 0) {
        clearInterval(intervalId);
        defaultOptions.mode === 'pomodoro' && defaultOptions.sessions++;
        shouldAutoStart && autoSwitch(defaultOptions.mode, defaultOptions.sessions, defaultOptions.longBreakInterval);
      }
    }, 1000);
    setIntervalValue(Number(intervalId));

  }

  const stopTimer = () => {
    clearInterval(interval);
  }

  const switchMode = (mode: string) => {
    console.log('a');
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
    stopTimer();
    setIsStartAvailable(true);
  }

  return <TimerContext.Provider value={
    {
      timerData,
      defaultOptions,
      isStartAvailable,
      setTimerData,
      switchMode,
      handleMode,
      startTimer,
      stopTimer,
      setIsStartAvailable,
    }
    }>
    {children}
  </TimerContext.Provider>
};

