import bcrypt from "bcrypt";

class Bcrypt {
	/**
	 *
	 * @param {string} password
	 * @returns {Promise<string>}
	 */
	static async hash(password) {
		return await bcrypt.hash(password, 10);
	}

	/**
	 *
	 * @param {string} password
	 * @param {string} hash
	 * @returns
	 */
	static async compare(password, hash) {
		return await bcrypt.compare(password, hash);
	}

	/**
	 *
	 * @param {string} password
	 * @param {string} hash
	 * @returns {boolean}
	 */
	static compareSync(password, hash) {
		return bcrypt.compareSync(password, hash);
	}

	/**
	 *
	 * @param {string} password
	 * @returns {string}
	 */
	static hashSync(password) {
		return bcrypt.hashSync(password, 10);
	}
}

export default Bcrypt;
