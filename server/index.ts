import express, { Express } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const sequelize = require('./models/index.model');
const employeesRouter = require('./routes/employee.route');

const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.use('/api/employees', employeesRouter);

app.listen(port);