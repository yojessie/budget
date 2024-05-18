import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: 'NanumSquare', sans-serif;
    width: 100vw;
    height: 100vh;
  }
  ol, ul {
    list-style: none;
  }
  button {
    font-family: 'NanumSquare', sans-serif;
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
