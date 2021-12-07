import { forwardRef } from "react";
import styled from "styled-components";

const Input = forwardRef(({ errorMessage, width, ...other}, ref) => {
    return (
        <StyledInput width={width}>
            <input {...other}  ref={ref}/>
            <p className="error-message">{errorMessage}</p>
        </StyledInput>
    )
});

const StyledInput = styled.div`
    & > input {
        width: ${({ width }) => width || "370px"};
        height: 50px;

        mix-blend-mode: normal;
        border: 2px solid ${({ theme }) => theme.colors.border};
        box-sizing: border-box;
        border-radius: 100px;

        font-weight: 500;
        font-size: 18px;
        line-height: 26px;

        padding-left: 24px;

        color: rgba(21, 20, 57, 0.4);
    }

    & > input:focus {
        outline: 2px solid ${({ theme }) => theme.colors.heading};
    }

    & > input[aria-invalid="true"] {
        outline: 2px solid red;
    }

    & .error-message {
        color: red;
        margin: 2px 0 2px 20px;
    }
`;


export default Input;