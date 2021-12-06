import Container from "./styled/Container.styled";
import Placeholder from "./styled/Placeholder";
import StyledHeader3 from "./styled/Header3.styled";
import InfoText from "./styled/InfoText";
import Label from "./styled/Label.styled";
import RadioButton from "./styled/RadioButton.styled";
import FlexContainer from "./styled/FlexContainer";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import Button from "./styled/Button";

const PaymentMethods = () => {
    return (
        <Container>
            <StyledHeader3>
                Choose Your Payment Method
            </StyledHeader3>

            <Placeholder>
                <RadioButton 
                    type="radio"
                    name="payment-method"
                    id="paypal"
                />
                <FlexContainer direction="column">
                    <Label htmlFor="paypal">Paypal</Label>
                    
                    <InfoText>
                        Safe payment online. Credit card needed. PayPal account is not necessary.
                    </InfoText>

                    <Input
                        type="email"
                        placeholder="Email address"
                    />
                    
                </FlexContainer>
            </Placeholder>

            <Placeholder>
                <RadioButton 
                    type="radio"
                    name="payment-method"
                    id="credit-card"
                />
                <FlexContainer direction="column">
                    <Label htmlFor="credit-card">Credit Card</Label>

                    <InfoText>
                        Safe money transfer using your bank account.
                    </InfoText>

                    <FlexContainer>
                        <FlexContainer direction="column" margin="20px 20px 20px 0">
                            <InputLabel htmlFor="card-number">Credit card number</InputLabel>
                            <Input id="card-number"/>
                        </FlexContainer>
                        
                        <FlexContainer direction="column" margin="20px 20px 20px 0">
                            <InputLabel htmlFor="card-number">Expiration</InputLabel>
                            <Input id="card-number"/>
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer>
                        <FlexContainer direction="column" margin="20px 20px 20px 0">
                            <InputLabel htmlFor="card-number">Cardholder name</InputLabel>
                            <Input id="card-number"/>
                        </FlexContainer>
                        
                        <FlexContainer align="flex-end" margin="20px 20px 20px 0">
                            <FlexContainer direction="column">
                                <InputLabel htmlFor="card-number">Cvv code</InputLabel>
                                <Input 
                                    id="card-number"
                                    width="100px"
                                />
                            </FlexContainer>
                            <Button margin="0 0 0 20px">
                                Checkout
                            </Button>
                        </FlexContainer>
                    </FlexContainer>

                </FlexContainer>
            </Placeholder>
        </Container>
    )
}

export default PaymentMethods;
