export type remainingTime = {
  total: number,
  minutes: number,
  seconds: number,
}

export type timerOptions = {
  pomodoro: number;
  shortBreak: number,
  longBreak: number,
  longBreakInterval: number,
  mode?: string,
  timeRemaining?: remainingTime,
}
