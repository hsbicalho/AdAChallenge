import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background:#00304a;
        width: 100%;
        min-height: 100vh;
        margin-bottom: 3.5rem;
        
    }
`;
export default GlobalStyle;
