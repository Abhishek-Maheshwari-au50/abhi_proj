const expres = require('express');
const routes = express.Router();
const {studentAddController, AllStudents} = require('../controller/student');
routes.get("/allStudents", AllStudents);
routes.post('/AddStudents', studentAddController);

module.exports = routes;

//const {studentAddController, AllStudents, StudentByID}

const {studentAddController, AllStudents, StudentByID, StudentDeleteByID, 
StudentUpdateByID} = require("D:\ABHISHEK\JAVA Program\AttainU\BE Project\controller\controller.js");

routes.get("/allStudents/:Id", StudentByID);
routes.delete("/allStudents/:Id", StudentDeleteByID);
routes.patch("/allStudents/:Id", StudentUpdateByID);
