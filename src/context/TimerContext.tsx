import { createContext, useEffect, useState } from 'react';
import { timer, TimerContextProps, TimerContextProviderProps, TimerSettings, selectModeOptions } from '../typescript/types';
import { defaultSettings } from '../utils/defaultSettings';
import { getEndingTimeInMs, getRemainingTimer } from '../utils/helpers';
import buttonAudio from '../sounds/button-sound.mp3';
import alarmAudio from '../sounds/break.mp3'

export const TimerContext = createContext({} as TimerContextProps);

export function TimerProvider({ children }: TimerContextProviderProps) {
  const [isStartAvailable, setIsStartAvailable] = useState(true);
  const [interval, setIntervalValue] = useState(0);
  const [timerData, setTimerData] = useState(defaultSettings);
  const [shouldAutoStart, setShouldAutoStart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const buttonSound = new Audio(buttonAudio);
  const alarmSound = new Audio(alarmAudio);

  useEffect(() => {
    const { minutes, seconds } = timerData.timeRemaining;
    const { mode } = timerData;
    const titleText = mode === 'pomodoro' ? 'Focus!' : 'Take a break!';
    const titleTimer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.title = `${titleTimer} - ${titleText}`;
  });

  function handleStartTimer() {
    const { total } = timerData.timeRemaining;
    const endingTimeInMs = getEndingTimeInMs(total);
    
    buttonSound.play();
    const intervalId = setInterval(() => {
      const timer = getRemainingTimer(endingTimeInMs);
      updateTimer(timer);
      
      if (timer.total <= 0) {
        const { mode, longBreakInterval } = timerData;
        alarmSound.play();
        clearInterval(intervalId);
        if (mode === 'pomodoro') {
          timerData.sessions++;
        }

        autoSwitch(mode, longBreakInterval);
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
    if (shouldAutoStart) handleStartTimer();
  };

  function stopTimer() {
    buttonSound.play();
    clearInterval(interval);
  }

  function switchMode(mode: string) {
    const updatedTimer = timerData.timeRemaining = {
      total: Number(timerData[mode as keyof TimerSettings]) * 60,
      minutes: Number(timerData[mode as keyof TimerSettings]),
      seconds: 0,
    }
    setIsStartAvailable(true);
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
  }

  return <TimerContext.Provider value={
    {
      timerData,
      isStartAvailable,
      isOpen,
      shouldAutoStart,
      setIsOpen,
      setTimerData,
      switchMode,
      handleMode,
      handleStartTimer,
      stopTimer,
      setIsStartAvailable,
      setShouldAutoStart,
      updateTimer,
    }
    }>
    {children}
  </TimerContext.Provider>
};

