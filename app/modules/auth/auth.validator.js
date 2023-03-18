import { body } from "express-validator";

export const signInValidators = [
  body("email")
    .isEmail()
    .withMessage("Email is not valid")
    .notEmpty()
    .withMessage("Email is required"),
  body("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long, contains ar least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .notEmpty()
    .withMessage("Password is required"),
];

export const signUpValidators = [
  ...signInValidators,
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters")
    .notEmpty()
    .withMessage("Username is required"),
];
