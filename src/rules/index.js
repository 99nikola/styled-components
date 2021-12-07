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