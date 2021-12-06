import styled from "styled-components";


const Placeholder = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;

    border: 2px solid #EBEAED;
    box-sizing: border-box;
    border-radius: 10px;

    display: flex;
    padding: 30px;
    margin: 10px 0;

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export default Placeholder;