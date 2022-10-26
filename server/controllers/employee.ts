import { Request, Response } from "express";

const Employee = require('../models/Employee');

exports.getEmployees = async (req: Request, res: Response) => {
    const employees = await Employee.findAll();
    res.status(201).send(employees);
}

exports.getEmployee = async (req: Request, res: Response) => {
    const employee = await Employee.findOne({
        where: {
            employeeId: req.params.employeeId
        }
    })
    res.status(201).send(employee);
}