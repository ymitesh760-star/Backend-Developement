const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: String,
    duration: String,
    fees: Number
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;