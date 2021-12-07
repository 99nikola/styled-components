import { checkLuhn } from "../utils"

export const requiredRule = {
    required: "Required"
}

export const creditCardRule = {
    ...requiredRule,
    validate: {
        checkLuhn: checkLuhn
    }
}

export const creditExpirationRule = {
    ...requiredRule,
    pattern: {
        value: /^(0?[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
        message: "Invalid format."
    }
}

export const creditCvvRule = {
    ...requiredRule,
    pattern: {
        value: /^[0-9]{3}|[0-9]{4}$/,
        message: "Inavild format."
    }
}