import { createGlobalStyle } from 'styled-components';

import Background from 'assets/background.jpg';

export default createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-card-bg: #FFC107;
    --color-card-img: #4CAF50;
    --color-blue: #03A9F4;
    --color-blue-dark: #0376ab;
    --font-family-primary: Helvetica, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family-primary);
    outline: none;
  }

  body {
    background: linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${Background});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--color-white);
    min-height: 100vh;
  }
`;
