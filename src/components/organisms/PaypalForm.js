import { memo, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { requiredRule } from "../../rules";
import { RadioButton, Placeholder, FlexContainer, Label, InfoText, Input, Button } from "../styled";
import { EPaymentMethods } from "../templates/PaymentMethods";

const PaypalForm = ({ onSubmit, onError, handlePaymentChange, paymentMethod }) => {

    const form = useForm({
        mode: "onChange",
        defaultValues: {
            email: ""
        }
    });

    const SubmitButton = useMemo(() => (
        paymentMethod === EPaymentMethods.paypal && (
            <Button 
                margin="0 0 0 20px"
                type="submit"
                >
                Checkout
            </Button>
    )), [paymentMethod]);

    const handleChange = (e) => {
        if (e.target.checked)
            handlePaymentChange(EPaymentMethods.paypal);
    }

    return (
        <Placeholder htmlFor="paypal">
            <RadioButton 
                type="radio"
                name="payment-method"
                id="paypal"
                onChange={handleChange}
            />
            <FlexContainer direction="column">
                <form onSubmit={form.handleSubmit(onSubmit, onError)}>
                    <Label htmlFor="paypal">Paypal</Label>
                    
                    <InfoText>
                        Safe payment online. Credit card needed. PayPal account is not necessary.
                    </InfoText>

                    <FlexContainer direction="row">
                        <Controller 
                            name="email"
                            control={form.control}
                            rules={requiredRule}
                            render={({ field, fieldState }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="Email address"
                                    aria-invalid={Boolean(fieldState.error)}
                                    errorMessage={fieldState.error?.message}
                                />
                                )}
                            />
                        {SubmitButton}
                    </FlexContainer>
                </form>
            </FlexContainer>
        </Placeholder>
    );
}

export default memo(PaypalForm);
