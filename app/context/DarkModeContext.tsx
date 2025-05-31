// File: context/DarkModeContext.tsx
'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  const setInitialDarkModePreference = (): boolean => {
    if (typeof window === "undefined") return false;

    // Check local storage for saved preference
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) return savedMode === "true";

    // Check preference from system/browser
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      return mediaQuery.matches;
    }
    return false;
  };

  // Sets initial dark mode
  useEffect(() => {
    const initialMode = setInitialDarkModePreference();
    setIsDarkMode(initialMode);
  }, []);
  
  // Update dark mode class and local storage
  useEffect(() => {
    if (typeof window !== "undefined" && isDarkMode !== null) {
      localStorage.setItem("darkMode", isDarkMode.toString());
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode: isDarkMode ?? false, toggleDarkMode }}>
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