export function isNaturalNumber(input) {
    const number = Number.parseInt(input);
	return (Number.isInteger(number) && number > 0);
}


export function checkLuhn (cardNumber) {
    if (!isNaturalNumber(cardNumber)) 
        return "Invalid credit card number";

    let sum = 0;
    let remainder = (cardNumber.length-1) % 2;

    for (let i=cardNumber.length-1; i>=0; i--) {
        let digit = Number.parseInt(cardNumber[i]);
        if (i % 2 === remainder) {
            digit *= 2;
            if (digit >= 10) 
                digit -= 9;
        } 
        sum += digit;
    }

    const luhn = sum % 10;    
    if (luhn !== 0)
        return `Warning: Next check digit: ${10 - luhn}`;
        
    return true;
}