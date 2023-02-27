import Event from "./event.model";

import { useFilterEvents } from "./event.hook";

class EventService {
	static async getList(params = {}) {
		const { queries, queryParams } = useFilterEvents(params);

		return await Event.paginate(queries, queryParams);
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
