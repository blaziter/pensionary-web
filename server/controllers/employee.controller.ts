import { Request, Response } from "express";

const Employee = require('../models/employee.model');

exports.getEmployees = async (req: Request, res: Response) => {
    const employees = await Employee.findAll();
    res.status(201).send(employees);
}

exports.getEmployee = async (req: Request, res: Response) => {
    const employee = await Employee.findOne({
        where: {
            employeeId: req.params.employeeId
        }
    });

    if (!employee) {
        res.status(404).send('No user was found');
    }
    
    res.status(201).send(employee);
}