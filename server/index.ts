import express, { Express, Request } from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route';
import employeeRouter from './routes/employee.route';
import announcementRouter from './routes/announcement.route';

const cookieParser = require('cookie-parser');
const session = require('express-session');
import cors = require('cors');
import { authentication } from './middleware/authorization.middleware';
import { isLoggedIn } from './middleware/loggedIn.middleware';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors<Request>({ origin: 'http://localhost:3000', credentials: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use('/api/announcement', announcementRouter);

app.use('/api/auth', authRouter);

app.use(authentication);
app.use(isLoggedIn);

app.use('/api/employee', employeeRouter);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});