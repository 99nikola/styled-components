import styled from "styled-components";


const Input = styled.input`
    width: ${(props) => props.width || "370px"};
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

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.primary}
    }

`;

export default Input;