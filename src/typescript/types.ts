import { ReactNode } from 'react';

export type TimerContextProps = {
  timerData: TimerSettings,
  isStartAvailable: boolean,
  isOpen: boolean,
  shouldAutoStart: boolean,
  darkMode: boolean,
  setIsOpen: (open: boolean) => void,
  setTimerData: (timer: TimerSettings) => void,
  switchMode: (mode: string) => void,
  handleMode: (event: React.MouseEvent) => void,
  handleStartTimer: () => void,
  stopTimer: () => void,
  setIsStartAvailable: (isStartAvailable: boolean) => void,
  setShouldAutoStart: (shouldAutoStart: boolean) => void,
  updateTimer: (updatedTimer: timer) => void,
  setDarkMode: (darkMode: boolean) => void,
}

export type TimerContextProviderProps = {
  children: ReactNode,
}

export type timer = {
  total: number,
  minutes: number,
  seconds: number,
}

export type TimerSettings = {
  pomodoro: number,
  shortBreak: number,
  longBreak: number,
  sessions: number,
  longBreakInterval: number,
  mode: string,
  timeRemaining: timer,
}

export type selectModeOptions = {
  longBreak: () => void,
  shortBreak: () => void,
  pomodoro: () => void,
}

export interface Todo {
  value: string,
  id: number,
  finished: boolean,
}

export interface Props {
  textDec?: boolean,
  darkMode?: boolean,
}
