/**
 *
 * @param {String} string
 * @returns {Object}
 *
 * @example
 *
 * sortGenerator("title:desc,createdAt:asc")
 *
 * // returns
 *
 * {
 * title: -1,
 * createdAt: 1
 * }
 */
export default function sortGenerator(string) {
	const sort = {};

	string.split(",").forEach((item) => {
		const [key, value] = item.split(":");

		sort[key] = value === "desc" ? -1 : 1;
	});

	return sort;
}
