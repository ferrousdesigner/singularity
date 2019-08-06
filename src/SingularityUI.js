import StyleMaker from 'stylemaker';
import { Button } from './components/Button';
import { Nav } from  './components/Nav';
import { Presentor } from './components/Presentor';
import { Header } from './components/Header';

const settings = (setting) => {

}
const cssReset = `
    @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,700');
    @import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');

    :root {
        font-size: 10px;
    }
    body, html, h1, h2, h3, h4, h5, h6, section {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *{
      box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    body {
        background: black;
        font-family: 'Poppins',sans-serif;
        color: #eee;
        font-size: 1.6rem;
        line-height: 1.5;
        font-weight: lighter;
    }
    .loader-spinner {
        color: white;
        display: inline-block;
        position: relative;
        margin: 0 auto;
        vertical-align: middle;
        width: 20%;
        height: 100%;
      }
      .loader-spinner div {
        transform-origin: center;
        animation: loader-spinner 1.2s linear infinite;
      }
      .loader-spinner div:after {
        content: " ";
        display: block;
        position: absolute;
        top: 0.4rem;
        left: 0rem;
        width: 0.2rem;
        height: 0.8rem;
        border-radius: 20%;
        background: #fff;
      }
      .loader-spinner div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -1.1s;
      }
      .loader-spinner div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -1s;
      }
      .loader-spinner div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.9s;
      }
      .loader-spinner div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.8s;
      }
      .loader-spinner div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.7s;
      }
      .loader-spinner div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.6s;
      }
      .loader-spinner div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.5s;
      }
      .loader-spinner div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.4s;
      }
      .loader-spinner div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.3s;
      }
      .loader-spinner div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.2s;
      }
      .loader-spinner div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.1s;
      }
      .loader-spinner div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
      }
      @keyframes loader-spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    @media only screen and (max-width: 480px) {
        :root {
            font-size: 7px;
        } 
    }
`
//Initial Reset Styling 
StyleMaker(cssReset)

export {
    settings,
    Button,
    Nav,
    Presentor,
    Header
};