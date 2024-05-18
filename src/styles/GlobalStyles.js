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
    color: ${({ theme }) => theme.color.txtBody};
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }
  input, textarea {
    font-family: 'NanumSquare', sans-serif;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
