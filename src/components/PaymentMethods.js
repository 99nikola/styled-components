import { Controller, useForm } from "react-hook-form";
import { Button, Container, FlexContainer, Header3, InfoText, Input, InputLabel, Label, Placeholder, RadioButton } from "./styled";

const PaymentMethods = () => {

    const form = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            cardNumber: "",
            cardExpiration: "",
            cardHolder: "",
            cardCVV: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Success: ", data);
    }

    const onError = (error) => {
        console.log("Error: ", error);
    }

    const handlePaymentChange = (e) => {
        console.log(e);
        
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <Container>
                <Header3>
                    Choose Your Payment Method
                </Header3>

                <Placeholder>
                    <RadioButton 
                        type="radio"
                        name="payment-method"
                        id="paypal"
                        onChange={handlePaymentChange}
                        />
                    <FlexContainer direction="column">
                        <Label htmlFor="paypal">Paypal</Label>
                        
                        <InfoText>
                            Safe payment online. Credit card needed. PayPal account is not necessary.
                        </InfoText>

                        <Controller 
                            name="email"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="Email address"
                                    />
                            )}
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
                                <Controller
                                    name="cardNumber"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Input 
                                            {...field}
                                            id="card-number"
                                        />
                                    )}
                                />
                            </FlexContainer>
                            
                            <FlexContainer direction="column" margin="20px 20px 20px 0">
                                <InputLabel htmlFor="card-expiration">Expiration</InputLabel>
                                <Controller 
                                    name="cardExpiration"
                                    control={form.control}
                                    render={({ field }) => (
                                        <Input 
                                            {...field}
                                            id="card-expiration"
                                        />
                                    )}
                                />
                            </FlexContainer>
                        </FlexContainer>
                        <FlexContainer>
                            <FlexContainer direction="column" margin="20px 20px 20px 0">
                                <InputLabel htmlFor="card-holder">Cardholder name</InputLabel>
                                <Controller  
                                    name="cardHolder"
                                    control={form.control}
                                    render={({ field }) => (
                                        <Input 
                                            {...field}
                                            id="card-holder"
                                        />
                                    )}
                                />
                            </FlexContainer>
                            
                            <FlexContainer align="flex-end" margin="20px 20px 20px 0">
                                <FlexContainer direction="column">
                                    <InputLabel htmlFor="card-cvv">Cvv code</InputLabel>
                                    <Controller 
                                        name="cardCVV"
                                        control={form.control}
                                        render={({ field }) => (
                                            <Input
                                                {...field} 
                                                id="card-cvv"
                                                width="100px"
                                            />
                                        )}
                                    />
                                </FlexContainer>
                                <Button 
                                    margin="0 0 0 20px"
                                    type="submit"
                                    >
                                    Checkout
                                </Button>
                            </FlexContainer>
                        </FlexContainer>

                    </FlexContainer>
                </Placeholder>
            </Container>
        </form>
    );
}

export default PaymentMethods;
