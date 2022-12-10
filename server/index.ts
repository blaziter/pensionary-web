import express, { Express, Request } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route';
import employeeRouter from './routes/employee.route';
import announcementRouter from './routes/announcement.route';
import userRouter from './routes/user.routes';

const cookieParser = require('cookie-parser');
import cors = require('cors');
import { authentication } from './middleware/authorization.middleware';
import { isLoggedIn } from './middleware/loggedIn.middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors<Request>({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use('/api/auth', authRouter);

app.use(authentication);

app.use('/api/user', userRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/announcement', announcementRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});