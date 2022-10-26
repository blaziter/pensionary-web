import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = require('./models/index');
const employeesRouter = require('./routes/employee');

const app: Express = express();
const port = process.env.PORT;

app.use('/api', employeesRouter);

app.listen(port);