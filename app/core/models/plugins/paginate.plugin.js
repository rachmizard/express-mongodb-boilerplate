/**
 *
 * @param {import("mongoose").Schema} schema
 */
function paginatePlugin(schema) {
	/**
	 * @param {import("mongoose").FilterQuery<any>} query
	 * @param {import("mongoose").QueryOptions} options
	 * @param {import("mongoose").Projection} projection
	 * @param {import("mongoose").Callback<any>} callback
	 * @returns {Promise<{ results: any[]; page: number; limit: number; count: number; }>}
	 */
	schema.statics.paginate = async function (
		query,
		options,
		projection,
		callback
	) {
		const sort = options?.sort || {};
		const limit = options?.limit || 10;
		const page = options?.page || 1;
		const skip = (page - 1) * limit;

		const results = await this.find(query)
			.select(projection)
			.sort(sort)
			.skip(skip)
			.limit(limit)
			.exec(callback);

		const count = await this.countDocuments(query).exec(callback);

		return {
			results,
			page: parseInt(page),
			limit: parseInt(limit),
			count: parseInt(count),
		};
	};
}

export default paginatePlugin;
