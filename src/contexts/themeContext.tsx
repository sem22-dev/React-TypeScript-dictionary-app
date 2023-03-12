import React, { createContext} from "react";

interface ThemeContextType {
  word: string;
  setWord: (word: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  word: "",
  setWord: () => {},
});

type Props = {
  children : React.ReactNode
}

export const ThemeContextProvider = ({ children }: Props) => {
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
