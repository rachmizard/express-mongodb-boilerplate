import { body } from "express-validator";

export const eventValidators = [
  body("title", "Title wajib diisi")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Title minimal 3 karakter"),
  body("price", "Price is Required")
    .isInt({
      min: 1000,
    })
    .withMessage("Price atleast 1000"),
  body("images", "Images is Required")
    .isArray({
      min: 1,
    })
    .withMessage("Images atleast 1")
    .toArray(),
  body("description", "Description is Required")
    .notEmpty({
      ignore_whitespace: true,
    })
    .isLength({
      min: 20,
    }),
  body("location", "Location is Required").notEmpty({
    ignore_whitespace: true,
  }),
  body("startDate", "Start date is required")
    .notEmpty()
    .isDate({
      format: "YYYY-MM-DD",
    })
    .withMessage("Start date should be formatted as YYYY-MM-DD")
    .toDate(),
  body("endDate", "End date is required")
    .notEmpty()
    .isDate({
      format: "YYYY-MM-DD",
    })
    .custom((value, meta) => {
      if (value < meta.req.body.startDate) {
        throw new Error("End date should be greater than start date");
      }
      return true;
    })
    .toDate(),
];
