import { ReactNode } from "react";

export type TimerContextProps = {
  timerData: timer;
  defaultOptions: TimerOptions,
  setTimerData: (timer: timer) => void;
  switchMode: (mode: string) => void;
  handleMode: (event: React.MouseEvent) => void;
  startTimer: () => void;
}

export type TimerContextProviderProps = {
  children: ReactNode;
}

// export type timerKeys = keyof timerOptions;

export type timer = {
  total: number,
  minutes: number,
  seconds: number,
}

export type TimerOptions = {
  pomodoro: number;
  shortBreak: number,
  longBreak: number,
  longBreakInterval: number,
  mode?: string,
  timeRemaining?: timer,
}
