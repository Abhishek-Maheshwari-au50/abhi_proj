const Student = require("D:\ABHISHEK\JAVA Program\AttainU\BE Project\model.js");

const AllStudents = (req, res) => {
    Student.find().then((AllStudents)=> {
        res.json(AllStudents)
    }).catch((error) => res.send(error)
)}

const studentAddController = (req, res) => {
    Student.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        college: req.body.college
    }).then((student) => {res.json(student);
    }).catch((error) => {
        res.send(error);
    })
}

const StudentById = (req, res) => {
    console.log(req.params);

    const student = Student.findByID(req.params.Id)
    .then((student) => {
        res.json(student);
    })
    .catch((err) => {
        res.json({message: err});
    })
};

const StudentDeleteByID = (req, res) => {
    const deleteStudent = Student.remove({_id: req.params.Id})
    .then((deleteStudent) => {
        res.json(deleteStudent);
    })
    .catch((err) => {
        res.json({message: err})
    })
};

const StudentUpdateByID = (req, res) => {
    const updateStudent = Student.updateOne(
        {_id: req.params.Id}, {$set}
    )
}
module.exports = {studentAddController, AllStudents, StudentByID};