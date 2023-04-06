import { body } from "express-validator";

export const eventValidators = [
  body("title", "Title is required")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  body("price", "Price is required")
    .isInt({ min: 0 })
    .withMessage("Price must be at least 0"),
  body("images", "Images are required")
    .isArray({ min: 1 })
    .withMessage("At least one image is required")
    .toArray(),
  body("description", "Description is required")
    .notEmpty()
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),
  body("location", "Location is required")
    .notEmpty()
    .isLength({ min: 5 })
    .withMessage("Location must be at least 5 characters long")
    .trim(),
  body("startDate", "Start date is required")
    .notEmpty()
    .isDate({ format: "YYYY-MM-DD" })
    .toDate(),
  body("endDate", "End date is required")
    .notEmpty()
    .isDate({ format: "YYYY-MM-DD" })
    .custom((value, meta) => {
      if (value < meta.req.body.startDate) {
        throw new Error("End date must be greater than start date");
      }
      return true;
    })
    .toDate(),
];
