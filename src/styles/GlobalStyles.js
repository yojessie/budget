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
    width: 100vw;
    height: 100vh;
    font-family: 'NanumSquare', sans-serif;
    background-color: #111;
    ${({ theme }) => theme.flex.center};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'NanumSquare', sans-serif;
    color: ${({ theme }) => theme.color.txtBody};
  }
  p {
    color: ${({ theme }) => theme.color.txtBody};
  }
  ol, ul {
    list-style: none;
  }
  button {
    font-family: 'NanumSquare', sans-serif;
    color: ${({ theme }) => theme.color.txtWhite};
    border: none;
    outline: none;
    background-color: inherit;
    transition: opacity, 0.5s;
    cursor: pointer;

    &:hover {
    opacity: 80%;
  }
  }
  input, textarea {
    font-family: 'NanumSquare', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  #root {
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.bgRoot};
    ${({ theme }) => theme.flex.center};
  }
`;

export default GlobalStyle;
