import { Request, Response } from "express";
import { options } from "../db.connector";
import Firebird from 'node-firebird';
import bufferParser from "../middleware/bufferParser.middleware";

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