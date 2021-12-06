import { Button, Container, FlexContainer, Header3, InfoText, Input, InputLabel, Label, Placeholder, RadioButton } from "./styled";

const PaymentMethods = () => {
    return (
        <Container>
            <Header3>
                Choose Your Payment Method
            </Header3>

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
                            <InputLabel htmlFor="card-expiration">Expiration</InputLabel>
                            <Input id="card-expiration"/>
                        </FlexContainer>
                    </FlexContainer>
                    <FlexContainer>
                        <FlexContainer direction="column" margin="20px 20px 20px 0">
                            <InputLabel htmlFor="card-holder">Cardholder name</InputLabel>
                            <Input id="card-holder"/>
                        </FlexContainer>
                        
                        <FlexContainer align="flex-end" margin="20px 20px 20px 0">
                            <FlexContainer direction="column">
                                <InputLabel htmlFor="card-cvv">Cvv code</InputLabel>
                                <Input 
                                    id="card-cvv"
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
