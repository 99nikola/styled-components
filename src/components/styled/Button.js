import styled from "styled-components";

const Button = styled.button`
    width: 140px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 100px;

    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;

    border: none;

    &:active {
        border: 1px solid ${({ theme }) => theme.colors.border};
    }

    margin: ${({ margin }) => margin || "0"};
`;


export default Button;