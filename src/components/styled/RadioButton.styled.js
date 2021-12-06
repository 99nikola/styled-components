import styled from "styled-components";


const RadioButton = styled.input`
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.background};

    -webkit-appearance: none;
    appearance: none;

    font: inherit;
    border: 2px solid ${({ theme }) => theme.colors.border};
    box-sizing: border-box;
    border-radius: 23px;

    display: grid;
    place-content: center;

    &::before {
        content: "";
        width: 12px;
        height: 12px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: ${({ theme }) => theme.colors.heading};
        outline: 4px solid #25DAC5;
    }

    &:checked::before {
        transform: scale(1);
    }
`;

export default RadioButton;