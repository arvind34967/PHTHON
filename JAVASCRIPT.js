const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database (temporary)
let students = [];
let faculty = [];
let classes = [];

// Add Student
app.post("/students", (req, res) => {
    students.push(req.body);
    res.send("Student Added");
});

// Get Students
app.get("/students", (req, res) => {
    res.json(students);
});

// Add Faculty
app.post("/faculty", (req, res) => {
    faculty.push(req.body);
    res.send("Faculty Added");
});

// Get Faculty
app.get("/faculty", (req, res) => {
    res.json(faculty);
});

// Add Class
app.post("/classes", (req, res) => {
    classes.push(req.body);
    res.send("Class Added");
});

// Get Classes
app.get("/classes", (req, res) => {
    res.json(classes);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});