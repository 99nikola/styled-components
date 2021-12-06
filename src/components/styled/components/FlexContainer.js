import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "flex-start"};
    margin: ${({ margin }) => margin || "0"};
`;

export default FlexContainer;
