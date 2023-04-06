import { ApiError, HttpStatus } from "core";
import Event from "./event.model";

class EventService {
  static async getList() {
    return await Event.find();
  }

  static async getById(id) {
    const found = await Event.findById(id);
    if (!found) {
      throw new ApiError(HttpStatus.NOT_FOUND, "Event not found");
    }
    return await Event.findById(id);
  }

  static async create(event) {
    return await Event.create(event);
  }

  static async update(id, event) {
    const found = await Event.findById(id);
    if (!found) {
      throw new ApiError(HttpStatus.NOT_FOUND, "Event not found");
    }
    return await Event.findByIdAndUpdate(id, event, { new: true });
  }

  static async delete(id) {
    return await Event.findByIdAndDelete(id);
  }
}

export default EventService;
