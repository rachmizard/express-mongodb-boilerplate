import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: [3, "Title minimal 3 karakter"],
  },
  price: {
    type: Number,
    required: true,
    min: [1000, "Harga minimal 1000"],
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "Minimal 1 gambar",
    },
  },
  description: {
    type: String,
    required: true,
    minLength: [20, "Deskripsi minimal 20 karakter"],
  },
  startDate: {
    type: Date,
    required: [true, "Tanggal mulai harus diisi"],
  },
  endDate: {
    type: Date,
    required: [true, "Tanggal selesai harus diisi"],
    validate: {
      validator: function (v) {
        return this.startDate <= v;
      },
      message: "Tanggal selesai harus lebih besar dari tanggal mulai",
    },
  },

  location: {
    type: String,
    required: true,
    minLength: [5, "Lokasi minimal 5 karakter"],
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
