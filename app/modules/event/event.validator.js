import { body } from "express-validator";

export const eventValidators = [
  body("title", "Title is required")
    .exists()
    .isLength({
      min: 3,
    })
    .withMessage("Title must be at least 3 characters"),
  body("price", "Price is required")
    .isInt({
      min: 1,
    })
    .withMessage("Price must be at least 1")
    .toInt(),
  body("images", "Image is required")
    .isArray({
      min: 1,
    })
    .toArray(),
  body("startDate", "Start Date is required")
    .isDate({
      format: "YYYY-MM-DD",
    })
    .withMessage("Start Date must be in YYYY-MM-DD Format"),
  body("endDate", "End Date is required")
    .isDate()
    .withMessage()
    .custom((value, meta) => {
      if (value < meta.req.body.startDate) {
        throw new Error("End Date must be greater than Start Date");
      }
      return true;
    }),
  body("description", "Description is required")
    .isLength({
      min: 20,
    })
    .withMessage("Description must be greater than 20 characters"),
  body("location", "Location is required"),
];
