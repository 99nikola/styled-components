import styled from "styled-components";


const Label = styled.label`
    color: ${({ theme }) => theme.colors.heading};
    font-weight: 500;
    font-size: 18px;
    cursor: pointer;
    padding: 5px 0;
`;

export default Label;