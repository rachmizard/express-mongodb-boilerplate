import mongoose from "mongoose";

import Bcrypt from "../utils/bcrypt";

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
		validate: {
			validator: (value) => {
				return /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);
			},
		},
	},
	username: {
		type: String,
		required: true
	},

	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 128,
	},
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}

	try {
		const hashedPassword = await Bcrypt.hash(this.password);
		this.password = hashedPassword;
		next();
	} catch (error) {
		next(error);
	}
});

UserSchema.methods.isValidPassword = function (password) {
	return Bcrypt.compareSync(password, this.password);
};

UserSchema.statics.isEmailTaken = async function (email) {
	const user = await this.findOne({email});
	return !!user;
};

export default mongoose.model("User", UserSchema);
