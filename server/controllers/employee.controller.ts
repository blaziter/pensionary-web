import { Request, Response } from "express";
import Firebird from 'node-firebird';
import { options } from "../db.connector";
import { Employee } from "../models/employee.model";
import bufferParser from "../middleware/bufferParser.middleware";
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

        db.query('INSERT INTO EMPLOYEE (EMPLOYEEID, SUFFIX, PREFFIX, NAME, ROLE, AVAILABILITY, SHIFT, WORKPLACE) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [employee.employeeId, employee.suffix, employee.prefix, employee.name, employee.role, employee.availability, employee.shift, employee.workplace], (err, result) => {
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

            //This is definetly woodoo, need to fix, dont know how :(
            if (data.availability) user[0].AVAILABILITY = data.availability;
            if (data.name) user[0].NAME = data?.name;
            if (data.preffix) user[0].PREFFIX = data?.preffix;
            if (data.suffix) user[0].SUFFIX = data?.suffix;
            if (data.role) user[0].ROLE = data?.role;
            if (data.shift) user[0].SHIFT = data?.shift;
            if (data.workplace) user[0].WORKPLACE = data?.workplace;
            
            db.query('UPDATE EMPLOYEE set availability = ?, name = ?, preffix = ?, suffix = ?, role = ?, shift = ?, workplace = ?, WHERE employeeId = ?', [user[0].AVAILABILITY, user[0].NAME, user[0].PREFFIX, user[0].SUFFIX, user[0].ROLE, user[0].SHIFT, user[0].WORKPLACE, data.employeeId], (err: string) => {
                if (err) {
                    console.log(err);
                    db.detach();
                    return res.status(400).send('Update failed');
                }
                db.detach();
                return res.status(200).send('Edit was successfull')
            })
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

export const getEmployeeByRole = (req: Request, res: Response) => {
    const paramsData = req.params;

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM employee WHERE role = ?', [paramsData.role], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(404).send('Selected role doesnt exist');
            }

            result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const getEmployeeByShift = (req: Request, res: Response) => {
    const paramsData = req.params;

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM employee WHERE shift = ?', [paramsData.shift], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(404).send('Selected shift doesnt exist');
            }

            result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const getEmployeeByWorkplace = (req: Request, res: Response) => {
    const paramsData = req.params;

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM employee WHERE workplace = ?', [paramsData.workplace], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(404).send('Selected workplace doesnt exist');
            }

            result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}