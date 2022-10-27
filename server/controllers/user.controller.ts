import { Request, Response } from "express";
const User = require('../models/user.model');

interface IUser {
    uuid: string,
    username: string,
    password: string
}

exports.getLogin = async (req: Request, res: Response) => {
    
}