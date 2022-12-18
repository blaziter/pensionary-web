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
            if (result) result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const newEmployee = (req: Request, res: Response) => {
    let employee = req.body as Employee;
    employee.employeeId = uuidv4();

    if (!employee.name || !employee.role) {
        return res.status(400).send('Missing parameters!')
    }

    Firebird.attach(options, (err, db) => {
        if (err) throw err;

        db.query('INSERT INTO EMPLOYEE (EMPLOYEEID, SUFFIX, PREFIX, NAME, ROLE, AVAILABILITY, SHIFT, WORKPLACE) VALUES (?, ?, ?, ?, ?, ?, ?, ?);', [employee.employeeId, employee.suffix, employee.prefix, employee.name, employee.role, employee.availability, employee.shift, employee.workplace], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(400).send('Something went wrong');
            }

            res.status(200).send('Employee created successfully');
            db.detach();
        })
    })
}

export const updateEmployee = (req: Request, res: Response) => {
    const data = req.body;
    const { employeeId } = req.params;
    let user;

    if (!data) return res.status(400).send('Missing data');

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM employee WHERE employeeId = ?', [employeeId], (err, result) => {
            if (err) return res.status(400).send('Unknown employee');

            user = bufferParser(result);

            //This is definetly woodoo, need to fix, dont know how :(
            if (data.availability) user[0].AVAILABILITY = data.availability;
            if (data.name) user[0].NAME = data?.name;
            if (data.prefix) user[0].PREFIX = data?.prefix;
            if (data.suffix) user[0].SUFFIX = data?.suffix;
            if (data.role) user[0].ROLE = data?.role;
            if (data.shift) user[0].SHIFT = data?.shift;
            if (data.workplace) user[0].WORKPLACE = data?.workplace;
            
            db.query('UPDATE EMPLOYEE set availability = ?, name = ?, prefix = ?, suffix = ?, role = ?, shift = ?, workplace = ?, WHERE employeeId = ?', [user[0].AVAILABILITY, user[0].NAME, user[0].PREFIX, user[0].SUFFIX, user[0].ROLE, user[0].SHIFT, user[0].WORKPLACE, employeeId], (err: string) => {
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
    let { employeeId } = req.params;

    if (!employeeId) {
        return res.status(400).send('Missing employee uuid');
    }

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

export const getEmployeeByParams = (req: Request, res: Response) => {
    const group = req.query.group;
    const data = req.query.data;

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query(`SELECT * FROM employee WHERE ${group} = ?`, [data], (err, result) => {
            if (err) {
                console.log(err);
                db.detach();
                return res.status(404).send('Nothing found');
            }

            if (result) result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}