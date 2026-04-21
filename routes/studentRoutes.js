const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const auth = require("../middleware/authMiddleware");

// CREATE
router.post("/", auth, async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});

// READ ALL
router.get("/", auth, async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// UPDATE
router.put("/:id", auth, async (req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
});

// DELETE
router.delete("/:id", auth, async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
});

module.exports = router;