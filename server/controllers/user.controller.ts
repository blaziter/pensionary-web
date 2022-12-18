import { Request, Response } from "express";
import Firebird from 'node-firebird';
import { options } from "../db.connector";
import bufferParser from "../middleware/bufferParser.middleware";
import { v4 as uuidv4 } from 'uuid';
import { User } from "../models/user.model";


export const getAllUsers = (req: Request, res: Response) => {
    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM users', [], (err, result) => {
            if (result) result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const getUserById = (req: Request, res: Response) => {
    const { userId } = req.params;

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT userId, username, password FROM users WHERE userId = ?', [userId], (err, result) => {
            if (result) result = bufferParser(result);
            res.status(200).send(result);
            db.detach();
        });
    });
}

export const newUser = (req: Request, res: Response) => {
    let user = req.body as User;
    user.userId = uuidv4();

    if (!user.username || !user.password) {
        return res.status(400).send('Missing parameters!')
    }

    Firebird.attach(options, (err, db) => {
        if (err) throw err;

        db.query('INSERT INTO USERS (USERID, USERNAME, PASSWORD) VALUES (?, ?, ?);', [user.userId, user.username, user.password], (err, result) => {
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

export const updateUser = (req: Request, res: Response) => {
    const data = req.body;
    const { userId } = req.params;
    let user;

    if (!data) return res.status(400).send('Missing data');

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('SELECT * FROM users WHERE userId = ?', [userId], (err, result) => {
            if (err) return res.status(400).send('Unknown user');

            user = bufferParser(result);

            //This is definetly woodoo, need to fix, dont know how :(
            if (data.username) user[0].username = data.username;
            if (data.password) user[0].password = data?.password;
            
            db.query('UPDATE USERS set username = ?, password = ? WHERE userId = ?', [user[0].USERNAME, user[0].PASSWORD, userId], (err: string) => {
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

export const deleteUser = (req: Request, res: Response) => {
    let { userId } = req.params;

    if (!userId) {
        return res.status(400).send('Missing employee id');
    }

    Firebird.attach(options, (err, db) => {
        if (err) throw err;
    
        db.query('DELETE FROM USERS WHERE USERID = ?', [userId], (err, result) => {
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