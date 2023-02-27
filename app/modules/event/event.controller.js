import { ApiResponse } from "core";
import EventService from "./event.service";

class EventController {
	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async index(req, res) {
		const data = await EventService.getList();

        return ApiResponse.sendOk({
            message: "Event data fetched successfully",
			data
        })(res)
    }

	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async show(req, res) {
		const { id } = req.params;

		const data = await EventService.getById(id);

		return ApiResponse.sendOk({
			message: "Event data fetched successfully",
			data
		})(res)
	}

	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async create(req, res) {
		const { body } = req;

		const data = await EventService.create(body);

		return ApiResponse.sendOk({
			message: "Event data created successfully",
			data
		})(res)
	}

	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async update(req, res) {
		const { body } = req;
		const { id } = req.params;

		const data = await EventService.update(id, body);

		return ApiResponse.sendOk({
			message: "Event data updated successfully",
			data
		})(res)
	}

	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async delete(req, res) {
		const { id } = req.params;

		const data = await EventService.delete(id);

		return ApiResponse.sendOk({
			message: "Event data deleted successfully",
			data
		})(res)
	}


}

export default EventController;