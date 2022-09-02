import { TimerSettings } from '../typescript/types';

export const defaultSettings: TimerSettings = {
  pomodoro: 0.1,
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

defaultSettings.timeRemaining = {
  total: defaultSettings.pomodoro * 60,
  minutes: defaultSettings.pomodoro,
  seconds: 0,
}
