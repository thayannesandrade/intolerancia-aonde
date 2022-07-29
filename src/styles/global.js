import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
           font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    

    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Source Code Pro', monospace;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Square Peg', cursive;
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }

    a { 
        text-decoration: none;
    }
`