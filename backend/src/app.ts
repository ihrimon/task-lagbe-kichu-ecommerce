import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes/index';

const app: Application = express();

// parsers
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Welcome to "Kisu Lagbe" E-commerce Shop',
  });
});

app.use('/api/v1', router);

export default app;
