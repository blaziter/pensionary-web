import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = require('./models/index');
const employeesRouter = require('./routes/employees');

const app: Express = express();
const port = process.env.PORT;

app.use(employeesRouter);

app.listen(port);