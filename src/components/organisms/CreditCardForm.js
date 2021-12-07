import { memo, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { requiredRule, creditCardRule, creditExpirationRule, creditCvvRule } from "../../rules";
import { Button, FlexContainer, InfoText, Input, InputLabel, Label, Placeholder, RadioButton } from "../styled";
import { EPaymentMethods } from "../templates/PaymentMethods";
import CreditCards from "../molecules/CreditCards";

const CreditCardForm = ({ onSubmit, onError, handlePaymentChange, paymentMethod }) => {

    const form = useForm({
        mode: "onChange",
        defaultValues: {
            cardNumber: "",
            cardExpiration: "",
            cardHolder: "",
            cardCVV: ""
        }
    });

    const SubmitButton = useMemo(() => (
        paymentMethod === EPaymentMethods.creditCard && (
            <Button 
                margin="0 0 0 20px"
                type="submit"
                >
                Checkout
            </Button>
    )), [paymentMethod]);

    const handleChange = (e) => {
        if (e.target.checked)
            handlePaymentChange(EPaymentMethods.creditCard);
    }

    return (
        <Placeholder htmlfor="credit-card">
            <RadioButton 
                type="radio"
                name="payment-method"
                id="credit-card"
                defaultChecked
                onChange={handleChange}
                />
            <FlexContainer direction="column">
                <FlexContainer justify="space-between" width="100%">
                    <FlexContainer direction="column">
                        <Label htmlFor="credit-card">Credit Card</Label>

                        <InfoText>
                            Safe money transfer using your bank account.
                        </InfoText>
                    </FlexContainer>

                    <CreditCards />
                </FlexContainer>

                <form onSubmit={form.handleSubmit(onSubmit, onError)}>
                    <FlexContainer>
                        <FlexContainer direction="column" margin="20px 20px 20px 0">
                            <InputLabel htmlFor="card-number">Credit card number</InputLabel>
                            <Controller
                                name="cardNumber"
                                control={form.control}
                                rules={creditCardRule}
                                render={({ field, fieldState }) => (
                                    <Input 
                                        {...field}
                                        id="card-number"
                                        aria-invalid={Boolean(fieldState.error)}
                                        errorMessage={fieldState.error?.message}
                                    />
                                )}
                            />
                        </FlexContainer>
                        
                        <FlexContainer direction="column" margin="20px 20px 20px 0">
                            <InputLabel htmlFor="card-expiration">Expiration</InputLabel>
                            <Controller 
                                name="cardExpiration"
                                control={form.control}
                                rules={creditExpirationRule}
                                render={({ field, fieldState }) => (
                                    <Input 
                                        {...field}
                                        id="card-expiration"
                                        aria-invalid={Boolean(fieldState.error)}
                                        errorMessage={fieldState.error?.message}
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
                                rules={requiredRule}
                                render={({ field, fieldState }) => (
                                    <Input 
                                        {...field}
                                        id="card-holder"
                                        aria-invalid={Boolean(fieldState.error)}
                                        errorMessage={fieldState.error?.message}
                                    />
                                )}
                                />
                        </FlexContainer>
                        
                        <FlexContainer align="flex-start" margin="20px 20px 20px 0">
                            <FlexContainer direction="column">
                                <InputLabel htmlFor="card-cvv">Cvv code</InputLabel>
                                <Controller 
                                    name="cardCVV"
                                    control={form.control}
                                    rules={creditCvvRule}
                                    render={({ field, fieldState }) => (
                                        <Input
                                            {...field} 
                                            id="card-cvv"
                                            width="100px"
                                            aria-invalid={Boolean(fieldState.error)}
                                            errorMessage={fieldState.error?.message}
                                        />
                                )}
                                />
                            </FlexContainer>
                            <FlexContainer margin="33px 0 0 0">
                                {SubmitButton}
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>
                </form>
            </FlexContainer>
        </Placeholder>
    );
}

export default memo(CreditCardForm);
