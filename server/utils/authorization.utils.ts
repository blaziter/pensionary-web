import { NextFunction, Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const authorization = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.access_token;
    if (!token) {
      res.status(403);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.body.userId = data.id;
      return next();
    } catch {
      return res.status(403);
    }
};