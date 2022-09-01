import { createContext, useState } from 'react';
import { timer, TimerContextProps, TimerContextProviderProps, TimerSettings } from '../typescript/types';
import { defaultSettings } from '../utils/defaultSettings';
import { getEndingTimeInMs, getRemainingTimer } from '../utils/helpers';

export const TimerContext = createContext({} as TimerContextProps);

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [isStartAvailable, setIsStartAvailable] = useState(true);
  const [currentOptions] = useState(defaultSettings);
  const [interval, setIntervalValue] = useState(0);
  const [timerData, setTimerData] = useState(currentOptions.timeRemaining as timer);
  const [shouldAutoStart, setShouldAutoStart] = useState(true);

  function handleStartTimer () {
    // const { total } = timerData;
    const endingTimeInMs = getEndingTimeInMs(timerData.total);
    // console.log(endingTimeInMs);

    const intervalId = setInterval(() => {
      const updatedTimer = getRemainingTimer(endingTimeInMs)
      setTimerData(updatedTimer);

      if (updatedTimer.total <= 0) {
        let { mode, sessions, longBreakInterval } = currentOptions;
        clearInterval(intervalId);
        mode === 'pomodoro' && sessions++;
        console.log(currentOptions);
        shouldAutoStart && autoSwitch(mode, sessions, longBreakInterval);
      }
    }, 1000);
    setIntervalValue(Number(intervalId));
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
    handleStartTimer();
  };

  const stopTimer = () => {
    clearInterval(interval);
  }

  const switchMode = (mode: string) => {
    console.log('a');
    currentOptions.mode = mode;
    const teste = currentOptions.timeRemaining = {
      total: Number(currentOptions[mode as keyof TimerSettings]) * 60,
      minutes: Number(currentOptions[mode as keyof TimerSettings]),
      seconds: 0,
    }
    console.log(teste);
    // setTimerData(currentOptions.timeRemaining);
    updateTimer(teste);
    console.log(timerData);
  }

  function updateTimer(updatedTimer: timer) {
    setTimerData(updatedTimer);
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
      handleStartTimer,
      stopTimer,
      setIsStartAvailable,
    }
    }>
    {children}
  </TimerContext.Provider>
};

