// File: context/DarkModeContext.tsx
'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const setInitialDarkModePreference = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkModePreferred = mediaQuery.matches;
    return isDarkModePreferred;
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(setInitialDarkModePreference());


  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
