const EmployeeModel = require('../models/employee.model');

const create = async (req,res,next)=>{
    try {
       
        const savedEmployee = await EmployeeModel.create(req.body);
        // const newEmployee = new EmployeeModel(req.body)
        // const savedEmployee = await EmployeeModel.create(req.body);


        console.log(savedEmployee);

        res.status(201).json({
            message:'Employee created successfully',
            savedEmployee
        })
    } catch (error) {
        res.status(500).send("Failed to save!!!");
    }
}
const update = async(req,res,next)=>{
    
}

const remove = async(req,res,next)=>{
    
}

const findById = async(req,res,next)=>{
    
}

const list = async(req,res,next)=>{
    try {
        var employees = await EmployeeModel.find({});
        res.status(200).json({ employees })
    } catch (error) {
        res.status(500).send("error in listing the employee!!!");
    }
    
}

const findByEmail = async(req,res,next)=>{
    
}

module.exports = {
    create,update,remove,findById,findByEmail,list
}