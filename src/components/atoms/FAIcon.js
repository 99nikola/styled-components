import { FlexContainer } from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../App";


const FAIcon = ({ icon, color, size }) => {
    return (
        <FlexContainer padding="0 5px">
            <FontAwesomeIcon icon={icon} size={size} color={color}/>
        </FlexContainer>
    )
}

export default FAIcon
