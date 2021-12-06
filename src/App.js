import { ThemeProvider } from "styled-components";
import PaymentMethods from "./components/PaymentMethods";
import { GlobalStyles } from "./components/styled";

const theme = {
    colors: {
        primary: "#25DAC5",
        heading: "#1E0E62",
        text: "rgba(21, 20, 57, 0.4)",
        background: "#FFFFFF",
        border: "#EBEAED"
    }
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <PaymentMethods />
        </ThemeProvider>
    );
}

export default App;
