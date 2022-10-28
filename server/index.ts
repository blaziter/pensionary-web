import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import cors = require('cors');
const sequelize = require('./models/index');
const employeesRouter = require('./routes/employee');

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

app.use('/api', employeesRouter);

app.listen(port);