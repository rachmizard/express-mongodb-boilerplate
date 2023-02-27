import { body } from "express-validator";

export const eventValidators = [
  body("title", "Title is required")
    .isLength({
      min: 3,
    })
    .withMessage("Title must be at leaset 3 characters long"),
  body("price", "Price is required")
    .isInt({
      min: 1000,
    })
    .withMessage("Price must be at lease 1000"),
  body("images")
    .isArray({
      min: 1,
    })
    .withMessage("At leaset one image is required")
    .toArray(),
  body("description", "Description is required")
    .isLength({ min: 20 })
    .withMessage("Description must be at least 20 characters long"),
  body("location", "Location is required").notEmpty({
    ignore_whitespace: true,
  }),
  body("startDate", "Start date is required")
    .isDate({ format: "YYYY-MM-DD", strictMode: true })
    .withMessage("Start date must be in the format YYYY-MM-DD")
    .toDate(),
  body("endDate", "End date is required")
    .isDate({ format: "YYYY-MM-DD", strictMode: true })
    .custom((value, meta) => {
      if (value < meta.req.body.startDate) {
        throw new Error("End date must be after start date");
      }
      return true;
    })
    .toDate(),
];
