import { body } from "express-validator";

export const signInValidators = [
  body("email").isEmail().withMessage("Email tidak Valid"),
  body("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password minimal 6 karakter"),
];

export const signUpValidators = [
  ...signInValidators,
  body("username")
    .isLength({
      min: 6,
    })
    .withMessage("Username Minimal 6 Karakter"),
];
