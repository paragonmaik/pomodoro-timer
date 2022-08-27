import { createContext, ReactNode, useContext, useState } from 'react';

const TimerContext = createContext({});

export function useTimerContext() {
  return useContext(TimerContext);
}


export function TimerProvider({}) {

  return <TimerContext.Provider value={
    {

    }
    }>
    {}
  </TimerContext.Provider>
};

