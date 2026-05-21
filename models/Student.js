const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollno: { type: Number, unique: true },
    course: String,
    age: { type: Number,min: 15 },
    email: String,
    city: String
});

module.exports = mongoose.model("Student", studentSchema);