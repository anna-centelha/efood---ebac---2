import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: #fff8f2;
    color: #000;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyles
