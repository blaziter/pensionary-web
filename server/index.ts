import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = require('./models/index');

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Express');
});

app.listen(port)