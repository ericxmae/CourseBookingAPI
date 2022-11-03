// for models use capitalization

const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Course Name is Required!"]
	},
	description: {
		type: String,
		required: [true, "Description is Required!"]
	}, 
	price: {
		type: Number,
		required: [ true, "Price is Rquired"]
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	enrollees: [{

		userId: {
			type: String,
			required: [true, "UserId is required"]
		},
		enrolledOn: {
			type: Date,
			default: new Date()
		}


	}]
})

module.exports = mongoose.model("Course", courseSchema);
// schema acts as the blueprint, model makes sure the blueprint/schema is being followed. 