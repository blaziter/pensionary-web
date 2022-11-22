import { Request, Response } from "express";
import Firebird from 'node-firebird';
import { options } from "../db.connector";
import { Employee } from "../models/employee.model";
import bufferParser from "../utils/bufferParser.utils";
import { v4 as uuidv4 } from 'uuid';

export const getAllEmployees = (req: Request, res: Response) => {
    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM employee', [], (err, result) => {
            result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const newEmployee = (req: Request, res: Response) => {
    let employee = req.body as Employee;
    employee.employeeId = uuidv4();

    console.log(employee);

    if (!employee.name || !employee.role) {
        return res.status(400).send('Missing parameters!')
    }

    Firebird.attach(options, (err, db) => {
        if (err) throw err;

        db.query('INSERT INTO EMPLOYEE (EMPLOYEEID, SUFFIX, PREFFIX, NAME, ROLE, AVAILABILITY) VALUES (?, ?, ?, ?, ?, ?);', [employee.employeeId, employee.suffix, employee.prefix, employee.name, employee.role, employee.availability], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(400).send('Something went wrong');
            }

            res.status(200).send('User created successfully');
            db.detach();
        })
    })
}

export const updateEmployee = (req: Request, res: Response) => {
    const data = req.body;
    let user;

    if (!data) return res.status(400).send('Missing data');

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM employee WHERE employeeId = ?', [data.employeeId], (err, result) => {
            if (err) return res.status(400).send('Unknown user');

            user = bufferParser(result);
            db.detach();

            //This is definetly woodoo, need to fix, dont know how :(
            user[0].AVAILABILITY = data?.availability;
            user[0].NAME = data?.name;
            user[0].PREFFIX = data?.prefix;
            user[0].SUFFIX = data?.suffix;
            user[0].ROLE = data?.role;
            console.log(user)
        });
    });
}

export const deleteEmployee = (req: Request, res: Response) => {
    let { employeeId } = req.body;

    if (!employeeId) {
        return res.status(400).send('Missing employee uuid');
    }

    console.log(employeeId);

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('DELETE FROM employee WHERE EMPLOYEEID = ?', [employeeId], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(400).send('Something went wrong');
            }

            res.status(200).send('User deleted successfully');
            db.detach();
        });
    });
}