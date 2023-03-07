import mongoose from "mongoose";
import paginatePlugin from "core/models/plugins/paginate.plugin";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    min: 3,
    required: true,
  },
  price: {
    type: Number,
    min: 3,
    required: true,
  },
  images: {
    type: [String],
    min: 1,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

EventSchema.plugin(paginatePlugin);

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

EventSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;

    ret.id = ret._id;

    delete ret._id;
    return ret;
  },
});

export default mongoose.model("Event", EventSchema);
