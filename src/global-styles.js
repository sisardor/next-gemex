import { createGlobalStyle } from 'styled-components';

/* eslint no-unused-expressions: 0 */
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    min-height:100%;
    position:relative;
    padding-bottom:100px;
    overflow: hidden;
    // background: #e3e8ee;
  }

  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  // #__next * {
  //   -webkit-box-sizing: border-box;
  //   -ms-box-sizing: border-box;
  //   -moz-box-sizing: border-box;
  //   -o-box-sizing: border-box;
  //   box-sizing: border-box;
  // }
`;
export default GlobalStyle;
