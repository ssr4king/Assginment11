const Student = require("../models/Student");
exports.getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.render("index", { students });
};

exports.showAddForm = (req, res) => {
    res.render("addStudent");
};

exports.addStudent = async (req, res) => {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.redirect("/students");

};
exports.showEditForm = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("editStudent", { student });

};

exports.updateStudent = async (req, res) => {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/students");
};
exports.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect("/students");
};
exports.viewStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render("viewStudent", { student });
};