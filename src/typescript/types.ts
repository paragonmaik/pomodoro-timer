import { ReactNode } from "react";

export type TimerContextProps = {
  timerData: timer;
  defaultOptions: TimerOptions,
  isStartAvailable: boolean,
  setTimerData: (timer: timer) => void;
  switchMode: (mode: string) => void;
  handleMode: (event: React.MouseEvent) => void;
  startTimer: () => void;
  stopTimer: () => void;
  setIsStartAvailable: (isStartAvailable: boolean) => void;
}

export type TimerContextProviderProps = {
  children: ReactNode;
}

export type timer = {
  total: number,
  minutes: number,
  seconds: number,
}

export type TimerOptions = {
  pomodoro: number;
  shortBreak: number,
  longBreak: number,
  sessions: number,
  longBreakInterval: number,
  mode: string,
  timeRemaining: timer,
}
