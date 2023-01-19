import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  /* :focus {
    outline: 0;
    box-shadow: 0 0 0 2px;
  } */

  body {
    background: ${({ theme }) => theme.neutral};
    color: ${({ theme }) => theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, text-area, button {
    /* font-family: 'Baloo 2', cursive; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
`
