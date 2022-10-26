import express, { Express } from 'express';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const sequelize = require('./models/index');
const employeesRouter = require('./routes/employee');

const app: Express = express();
const port = process.env.PORT;

app.use(express.static('img'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/api', employeesRouter);

app.listen(port);