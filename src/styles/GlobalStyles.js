import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        box-sizing: border-box;
        padding: 0px ;
    }

    body{
        background-color: ${props => props.theme.bg};
        color:  ${props => props.theme.textColor};
    }

    button {
        outline: none;
        border: none;
        background: transparent;
        font-family: inherit;
        color: ${props => props.theme.switchBg}
    }

    h1 {
        font-size: 3.3rem;
    }

    .defList{
        line-height: 1.7rem;
        margin-bottom: 10px;
        margin-left: 40px;
        font-size: 18px;
        &.example{
            color: #FFC109;
        }
        @media (min-width: 360px) and (max-width: 812px)  {
            font-size: 1rem;
    }
    }

    .synonyms{
        color:#FFC109;
        font-size: 1.3rem;
    }
`