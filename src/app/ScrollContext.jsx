import { createContext, useState } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  return <ScrollContext.Provider value={{ scrolled, setScrolled }}>{children}</ScrollContext.Provider>;
};
