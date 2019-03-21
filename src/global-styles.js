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

  // #listing-page-image-carousel .carousel-nav-button {
  //   -webkit-transition: all 0.1s;
  //   -moz-transition: all 0.1s;
  //   -o-transition: all 0.1s;
  //   -ms-transition: all 0.1s;
  //   transition: all 0.1s;
  //   background-color: #757575;
  //   opacity: 0.4;
  //   height: 80px;
  //   width: 40px;
  //   color: #FFF;
  // }
  //
  // #listing-page-image-carousel .carousel-nav-button:hover {
  //     opacity: 0.6;
  // }
  //
  // #listing-page-image-carousel .carousel-nav-button-prev {
  //     border-radius: 0 3px 3px 0;
  // }
  //
  // #listing-page-image-carousel .carousel-nav-button-next {
  //     border-radius: 3px 0 0 3px;
  // }
  //
  // #listing-page-image-carousel .carousel-footer {
  //     min-height: 20px;
  // }
  //
  // #listing-page-image-carousel .carousel-footer #zoom:not(.btn) {
  //     margin-top: -4px;
  //     color: #757575;
  //     text-decoration: none;
  // }
  //
  // #listing-page-image-carousel .image-carousel:hover {
  //     cursor: crosshair;
  //     cursor: zoom-in;
  //     cursor: url(/assets/dist/images/listzilla/zoom-icon-mag.20181101143023.svg) 16 16,zoom-in;
  // }
  //
  // #listing-page-image-carousel .image-carousel:hover.icon-magnifying-glass-out {
  //     cursor: zoom-out;
  // }
  //
  // #listing-page-image-carousel .image-carousel:hover.icon-magnifying-glass-out {
  //     cursor: url(/assets/dist/images/listzilla/zoom-out-icon-mag.20181105183921.svg) 16 16,zoom-out;
  // }
  //
  // #listing-page-image-carousel .image-carousel img {
  //     vertical-align: middle;
  //     width: auto;
  //     max-width: 100%;
  //     max-height: 100%;
  // }
  //
  // #listing-page-image-carousel .image-carousel img.resizable {
  //     height: auto;
  //     max-height: 650px;
  // }
  //
  // #listing-page-image-carousel .image-carousel li {
  //     display:flex;
  //     justify-content:center;
  //     align-items:center;
  // }
  //
  // #listing-page-image-carousel .pagination-item {
  //     -webkit-transition: opacity 0.1s;
  //     -moz-transition: opacity 0.1s;
  //     -o-transition: opacity 0.1s;
  //     -ms-transition: opacity 0.1s;
  //     transition: opacity 0.1s;
  //     font-size: 0;
  //     opacity: 0.6;
  // }
  //
  // #listing-page-image-carousel .pagination-item:hover {
  //     cursor: pointer;
  //     opacity: 0.85;
  // }
  //
  // #listing-page-image-carousel .pagination-item.is-active {
  //     opacity: 1;
  // }
`;
export default GlobalStyle;
