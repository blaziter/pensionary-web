import express, { Express } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route';

const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});