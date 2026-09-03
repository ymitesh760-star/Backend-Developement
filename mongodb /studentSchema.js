const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
})

const studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;