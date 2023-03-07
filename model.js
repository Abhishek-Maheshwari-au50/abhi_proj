const mongoos = require('mongoose');
const StudentsSchema = new mongoose.Schema({
    name: {type: String,
    required: true
    },
    email: {type: String, 
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    college: {
        type: String,
        required: true
    }
})

const Student = mongoose.model('std', StudentSchema);

module.export = Student;
