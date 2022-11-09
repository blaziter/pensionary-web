import { Request, Response } from "express";
import Firebird from 'node-firebird';
import { options } from "../db.connector";
import bufferParser from "../utils/bufferParser.utils";
const jwt = require('jsonwebtoken')

export const adminLogin = (req: Request, res: Response) => {
    const { payload } = req.body

    if(!(payload.username && payload.password)) {
        res.status(400).send('All fields need to be filled out')
    }

    Firebird.attach(options, (err, db) => {
        if (err)
            throw err;

        db.query('SELECT userId, username, password FROM USERS WHERE username = ?;', [payload.username], (err, result) => {
            if (err) {
                console.log(err)
                res.status(404).send('No user was found')
                db.detach()
                return
            }
            
            result = bufferParser(result)     
            if (payload.password == result[0].PASSWORD) {
                let jwtSecretKey = process.env.JWT_SECRET_KEY
                let data = {
                    time: Date(),
                    userId: result[0].USERID
                }

                const token = jwt.sign(data, jwtSecretKey)

                res.status(200).send(token)
                db.detach()
                return
            }

            res.status(401).send('Loggin wasnt successful')
            db.detach()
        });

    });
}

export const validateUser = (req: Request, res: Response) => {
    let tokenHeaderKey: any = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);
        const verified = jwt.verify(token, jwtSecretKey);

        if(verified){
            return res.status(200).send("Successfully Verified");
        }else{
            return res.status(401).send("Verification was not successful");
        }
    } catch (error) {
        return res.status(401).send(error);
    }
}