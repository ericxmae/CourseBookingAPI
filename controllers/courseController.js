const Course = require("../models/Course.js");


module.exports.addCourse = (data) => {
	if(data.isAdmin){
		let newCourse = new Course({
		name : data.course.name,
		description : data.course.description,
		price : data.course.price
	});

	return newCourse.save().then((newCourse, error) => {
		if (error){
			return false;
		}

			return true;
	})
}

	// if user is not admin, then return this message as promise to avoid error.
	let message = Promise.resolve('User must be ADMIN to access this.')

	return message.then((value) => {
		return value
	})

}

module.exports.getAllCourses = () => {
	return Course.find({}).then(result => {
		return result;
	})
}

module.exports.getActiveCourses = () => {
	return Course.find({isActive : true}).then(result => {
		return result;
	})
}

module.exports.getCourse = (courseId) => {
	return Course.findById(courseId).then(result => {
		return result;
	})
}

module.exports.updateCourse = (courseId, newData) => {
	return Course.findByIdAndUpdate(courseId, {
		name: newData.name,
		description: newData.description,
		price: newData.price
	})
	.then((updatedCourse, error) => {
		if (error){
			return false;
		}
		return true;
	})
}

module.exports.archiveCourse = (courseId) => {
	return Course.findByIdAndUpdate(courseId, {
		isActive : false
	}) 
	.then((archiveCourse, error) => {
		if(error){
			return false;
		}
			return true;
	})
}