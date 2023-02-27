import { body } from "express-validator";
export const signInValidators = [
    body("email").isEmail().withMessage("Email kamu salah!"),
    body("password").isLength({
        min: 8
    }).withMessage("Password minimal 8 karakter!") 
]

export const signUpValidators = [
    ...signInValidators,
    body("username").isLength({
        min:3
    }).withMessage("Username minimal 3 karakter")
]