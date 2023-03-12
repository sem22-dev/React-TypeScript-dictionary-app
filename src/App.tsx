import React from 'react';
import {Findings} from "./Components/Findings/Findings"
import {Header} from "./Components/Header/Header"
import {SearchSection} from "./Components/SearchSection/SearchSection"
import { AppContainer } from "./styles/appContainer"
import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from "./styles/Theme"
import { ThemeContextProvider } from "./contexts/themeContext"

function App() {

  const [nightMode, setNightMode] = React.useState(false)

  function switchToggle(){
    setNightMode(!nightMode)
  };

    return(
     <ThemeContextProvider>
      <ThemeProvider theme={nightMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <AppContainer>
          <Header
          nightMode={nightMode}
          handleClick={switchToggle}
          />
          <SearchSection />
          <Findings />
        </AppContainer>
      </ThemeProvider>
     </ThemeContextProvider>
    );
}

export default App;
