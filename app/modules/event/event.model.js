import paginatePlugin from "core/models/plugins/paginate.plugin";
import mongoose from "mongoose";

mongoose.plugin(paginatePlugin);

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minlength: 3,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [1000, "Price must be at lease 1000"],
  },
  images: {
    type: [String],
    required: [true, "Images are required"],
    validate: [(v) => v.length > 0, "At leaset one image is required"],
  },
  description: {
    type: String,
    required: [true, "Description are required"],
    minlength: [20, "Description must be at least 20 characters long"],
  },
  location: {
    type: String,
    required: [true, "Location are required"],
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, "Start date are required"],
  },
  endDate: {
    type: Date,
    required: [true, "End date are required"],
    validate: {
      validator: function (v) {
        return v > this.startDate;
      },
      message: "End date must be after start date",
    },
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

EventSchema.index(
  {
    title: "text",
    description: "text",
    location: "text",
  },
  {
    name: "EventSearchIndex",
    weights: {
      title: 5,
      description: 1,
      location: 3,
    },
  }
);

export default mongoose.model("Event", EventSchema);
