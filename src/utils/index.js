export function isNaturalNumber(input) {
    const number = Number.parseInt(input);
	return (Number.isInteger(number) && number > 0);
}


export function checkLuhn (cardNumber) {
    if (!isNaturalNumber(cardNumber)) 
        return "Invalid credit card number";

    let sum = 0;
    let remainder = Number.parseInt(cardNumber[cardNumber.length-1]) % 2;

    for (let i=cardNumber.length-1; i>=0; i--) {
        let digit = Number.parseInt(cardNumber[i]);
        if (i % 2 === remainder) {
            digit *= 2;
            if (digit >= 10) 
                digit = (digit % 10) + Math.floor(digit / 10);
        } 
        sum += digit;
    }
    
    if (sum % 10 !== 0)
        return "Invalid credit card number";
        
    return true;
}