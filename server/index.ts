import express, { Express } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});