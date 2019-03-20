import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }

    *:focus {
        outline: none;
    }
`;

export default GlobalStyle;
