import { NextFunction, Request, Response } from 'express';

export const isLoggedOut = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.session.loggedIn) return next();
};
