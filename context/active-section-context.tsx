"use client";

import type { SectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need this to disable observer to prevent setting activeSection while scrolling.

  return (
    <ActiveSectionContext.Provider value={{
        activeSection: activeSection,
        setActiveSection: setActiveSection,
        timeOfLastClick: timeOfLastClick,
        setTimeOfLastClick: setTimeOfLastClick,
      }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)!;

  if (context === null) throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");

  return context;
}
