// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bg:string,
    textColor: string,
    switchBg: string,
    searchBg: string,
    dropdownBg: string,
    playBg: string
  }
}