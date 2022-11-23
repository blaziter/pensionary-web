import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json('No token');
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.body.userId = data.id;
      return next();
    } catch {
      return res.status(403);
    }
};