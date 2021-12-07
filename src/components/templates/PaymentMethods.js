import { useCallback, useState } from "react";
import CreditCardForm from "../organisms/CreditCardForm";
import PaypalForm from "../organisms/PaypalForm";
import { Container, Header3 } from "../styled";

export const EPaymentMethods = {
    paypal: 0,
    creditCard: 1
}

const onSubmit = (data) => {
    console.log("Success: ", data);
}

const onError = (error) => {
    console.log("Error: ", error);
}

const PaymentMethods = () => {

    const [ paymentMethod, setPaymentMethod ] = useState(EPaymentMethods.creditCard);

    const handlePaymentChange = useCallback((payMethod) => {
        setPaymentMethod(payMethod);
    }, []);

    return (
        <Container>
            <Header3>
                Choose Your Payment Method
            </Header3>

            <PaypalForm 
                onSubmit={onSubmit} 
                onError={onError}
                handlePaymentChange={handlePaymentChange}
                paymentMethod={paymentMethod}
            />
            <CreditCardForm 
                onSubmit={onSubmit} 
                onError={onError}
                handlePaymentChange={handlePaymentChange}
                paymentMethod={paymentMethod}
            />
        </Container>
    );
}

export default PaymentMethods;
