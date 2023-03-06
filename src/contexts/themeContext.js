import React, { createContext} from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [word, setWord] = React.useState("Keyboard");
  return (
    <ThemeContext.Provider
      value={{
        word,
        setWord
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
