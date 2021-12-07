import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faCcMastercard, faCcDiscover, faCcAmex } from "@fortawesome/free-brands-svg-icons";
import { FlexContainer } from "../styled";
import { theme } from "../../App";
import FAIcon from "../atoms/FAIcon";

const CreditCards = () => {
    return (
        <FlexContainer>
            <FAIcon icon={faCcVisa} size="3x" color={theme.colors.border}/>
            <FAIcon icon={faCcMastercard} size="3x" color={theme.colors.border}/>
            <FAIcon icon={faCcDiscover} size="3x" color={theme.colors.border}/>
            <FAIcon icon={faCcAmex} size="3x" color={theme.colors.border}/>
        </FlexContainer>  
    );
}

export default CreditCards
