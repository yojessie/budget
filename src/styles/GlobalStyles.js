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
    height: auto;
    font-family: 'NanumSquare', sans-serif;
    background-color: #111;
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
    max-width: 360px;
    height: 100vh;
    margin: 0 auto;
    padding: 24px 0;
    transition: all 0.3s;
  }
`;

export default GlobalStyle;
