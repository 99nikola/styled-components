import styled from "styled-components";


const InfoText = styled.div`
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text};
    padding: 0 0 30px 0;
`;

export default InfoText;