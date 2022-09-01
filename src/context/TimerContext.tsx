import { createContext, useState } from 'react';
import { timer, TimerContextProps, TimerContextProviderProps, TimerSettings } from '../typescript/types';
import { defaultSettings } from '../utils/defaultSettings';

export const TimerContext = createContext({} as TimerContextProps);

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [isStartAvailable, setIsStartAvailable] = useState(true);
  const [currentOptions] = useState(defaultSettings);
  const [interval, setIntervalValue] = useState(0);
  const [timerData, setTimerData] = useState(defaultSettings.timeRemaining as timer);
  const [shouldAutoStart, setShouldAutoStart] = useState(true);

  function startTimer () {
    const { total } = timerData;
    console.log(total);
    const endTime = +Date.parse(new Date().toString()) + total * 1000
    console.log(currentOptions.mode, currentOptions.timeRemaining);

    const intervalId = setInterval(() => {
      const timerObj = getRemainingTimer(endTime)
      console.log(timerObj);
      setTimerData(timerObj);

      if (timerObj.total <= 0) {
        let { mode, sessions, longBreakInterval } = currentOptions;
        clearInterval(intervalId);
        mode === 'pomodoro' && sessions++;
        console.log(currentOptions);
        shouldAutoStart && autoSwitch(mode, sessions, longBreakInterval);
      }
    }, 1000);
    setIntervalValue(Number(intervalId));
  }

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

  const stopTimer = () => {
    clearInterval(interval);
  }

  const switchMode = (mode: string) => {
    console.log('a');
    currentOptions.mode = mode;
    currentOptions.timeRemaining = {
      total: Number(currentOptions[mode as keyof TimerSettings]) * 60,
      minutes: Number(currentOptions[mode as keyof TimerSettings]),
      seconds: 0,
    }
    console.log(currentOptions.timeRemaining);
    setTimerData(currentOptions.timeRemaining);
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

