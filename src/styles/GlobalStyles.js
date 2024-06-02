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
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'NanumSquare', sans-serif;
    ${({ theme }) => theme.typo.large};
    color: ${({ theme }) => theme.color.txtBody};
    text-align: center;
  }
  p {
    ${({ theme }) => theme.typo.regular};
    color: ${({ theme }) => theme.color.txtBody};
  }
  ol, ul {
    list-style: none;
  }
  button {
    font-family: 'NanumSquare', sans-serif;
    color: ${({ theme }) => theme.color.white};
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
    all: unset;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    color: inherit;
    font: inherit;

    &:focus {
     border-color: inherit;
    }
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
