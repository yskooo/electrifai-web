// File: context/DarkModeContext.tsx
'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const setInitialDarkModePreference = (): boolean => {
    // Check local storage for saved preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) return savedMode === "true";

    // Check preference from system/browser
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    return mediaQuery.matches;
  }

  const [isDarkMode, setIsDarkMode] = useState<boolean>(setInitialDarkModePreference());

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode.toString());
  }, [isDarkMode])

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
