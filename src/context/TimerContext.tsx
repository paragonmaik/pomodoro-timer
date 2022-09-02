import { createContext, useEffect, useState } from 'react';
import { timer, TimerContextProps, TimerContextProviderProps, TimerSettings, selectModeOptions } from '../typescript/types';
import { defaultSettings } from '../utils/defaultSettings';
import { getEndingTimeInMs, getRemainingTimer } from '../utils/helpers';

export const TimerContext = createContext({} as TimerContextProps);

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [isStartAvailable, setIsStartAvailable] = useState(true);
  const [interval, setIntervalValue] = useState(0);
  const [timerData, setTimerData] = useState(defaultSettings);
  const [shouldAutoStart, setShouldAutoStart] = useState(true);

  useEffect(() => {
    console.log(timerData.mode, timerData.sessions);
  }, [timerData])

  function handleStartTimer () {

    const { total } = timerData.timeRemaining;
    const endingTimeInMs = getEndingTimeInMs(total);

    const intervalId = setInterval(() => {
      const timer = getRemainingTimer(endingTimeInMs);
      updateTimer(timer);

      if (timer.total <= 0) {
        const { mode, longBreakInterval } = timerData;
        clearInterval(intervalId);
        if (mode === 'pomodoro') {
          console.log(timerData.sessions++);
        }
        if (shouldAutoStart) autoSwitch(mode, longBreakInterval);
      }
    }, 1000);
    setIntervalValue(Number(intervalId));
  }

  function autoSwitch(mode: string, breakInterval: number) {
    const { sessions } = timerData;
    const selectMode = {
      pomodoro: () => {
        if (sessions % breakInterval === 0) {
          switchMode('longBreak');
        } else {
          switchMode('shortBreak');
        }
      },
      longBreak: () => switchMode('pomodoro'),
      shortBreak: () => switchMode('pomodoro'),
    }
    selectMode[mode as keyof selectModeOptions]();
    handleStartTimer();
  };

  function stopTimer() {
    clearInterval(interval);
  }

  function switchMode(mode: string) {
    timerData.mode = mode;
    const updatedTimer = timerData.timeRemaining = {
      total: Number(timerData[mode as keyof TimerSettings]) * 60,
      minutes: Number(timerData[mode as keyof TimerSettings]),
      seconds: 0,
    }
    updateTimer(updatedTimer);
  }

  function updateTimer(timeRemaining: timer) {
    const updatedTimerData = timerData;
    setTimerData({ ...updatedTimerData, timeRemaining  });
  }

  function handleMode(event: React.MouseEvent) {
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

