import styled from "styled-components";

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    max-width: 1400px;
    max-height: 970px;
`;

export default Container;
