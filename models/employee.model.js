const mongoose = require('mongoose');
const Schema = mongoose.Schema();


const EmployeeSchema = new Schema({
    firstName:{ required: true, type: 'string'},
    lastName:{ required: true, type: 'string'},
    email:{ required: true, type: 'string'},
    phone:{ required: true, type: 'string'},
    gender:{ required: true, type: 'string'},
    nationalId:{ required: true, type: 'string'},
    role:{ 
        enum:{
            values:["HR","MANAGER","IT","ADMIN","EMPLOYEE"],
            message:"{value} is not a valid role"
        }
    },
    createDate:{
        required: true,
        type:Date,
        default: new Date()
    },
    updateTime:{ required: true, type:Date}
});

module.exports = mongoose.model("employee", EmployeeSchema);