import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: DM Sans, sans-serif !important;
        margin: 0 !important;
    }
    #root {
        display: flex;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyles;