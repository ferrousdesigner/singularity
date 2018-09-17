import StyleMaker from 'stylemaker';
import { Button } from './components/Button';
import { Nav } from  './components/Nav';
import { Presentor } from './components/Presentor';

const settings = (setting) => {

}
const cssReset = `
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,700');

    :root {
        font-size: 10px;
    }
    body, html, h1, h2, h3, h4, h5, h6, section {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    body {
        background: black;
        font-family: 'Roboto',sans-serif;
        color: #fff;
        font-size: 1.6rem;
    }
`
//Initial Reset Styling 
StyleMaker(cssReset)

export {
    settings,
    Button,
    Nav,
    Presentor
};