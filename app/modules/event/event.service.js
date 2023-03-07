import Event from "./event.model";

class EventService {
  static async getList(options = {}) {
    const { sort, page, limit } = options;

    return await Event.paginate(
      {},
      {
        sort,
        page,
        limit,
      }
    );
  }

  static async getById(id) {
    return await Event.findById(id);
  }

  static async create(event) {
    return await Event.create(event);
  }

  static async update(id, event) {
    return await Event.findByIdAndUpdate(id, event, { new: true });
  }

  static async delete(id) {
    return await Event.findByIdAndDelete(id);
  }
}

export default EventService;
