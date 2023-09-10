import { Request, Response } from 'express';
import Firebird from 'node-firebird';
import { options } from '../db.connector';
import bufferParser from '../middleware/bufferParser.middleware';
const jwt = require('jsonwebtoken');

export const adminLogin = (req: Request, res: Response) => {
  const { payload } = req.body;

  if (!(payload.username || payload.password)) {
    res.status(400).send('All fields need to be filled out');
  }

  Firebird.attach(options, (err, db) => {
    if (err) throw err;
    db.query(
      'SELECT userId, username, password FROM USERS WHERE username = ?;',
      [payload.username],
      (err, result) => {
        if (result.length === 0) {
          res.status(404).send('No user was found');
          db.detach();
          return;
        }

        result = bufferParser(result);
        if (payload.password == result[0].PASSWORD) {
          let data = {
            time: Date(),
            username: result[0].USERNAME,
          };

          const token = jwt.sign(data, process.env.JWT_SECRET_KEY);

          res
            .status(200)
            .cookie('token', token, {
              httpOnly: true,
            })
            .json('Logged in successfully');
          db.detach();
          return;
        }

        res.status(401).send("Loggin wasn't successful");
        db.detach();
      },
    );
  });
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie('token').status(200).json('Successfully logged out');
};

export const authorization = (req: Request, res: Response) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(403).json('No token');
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    return res.status(200).send(data);
  } catch {
    return res.status(403);
  }
};
