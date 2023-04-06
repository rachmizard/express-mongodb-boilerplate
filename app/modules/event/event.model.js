import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [3, "Title must be at least 3 characters long"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be at least 0"],
  },
  images: {
    type: [String],
    required: [true, "Images are required"],
    validate: {
      validator: (images) => images.length > 0,
      message: "At least one image is required",
    },
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minLength: [10, "Description must be at least 10 characters long"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
    minLength: [5, "Location must be at least 5 characters long"],
    trim: true,
  },
});

EventSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;

    ret.id = ret._id;

    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Event", EventSchema);
