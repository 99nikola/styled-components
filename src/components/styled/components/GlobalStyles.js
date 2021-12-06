import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-family: DM Sans, sans-serif;
    }
    #root {
        display: flex;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export default GlobalStyles;