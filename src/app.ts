import express, { Application, Request, Response } from 'express';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();
//Middleware to parse incoming JSON request
app.use(express.json());

//Application Routes
//Base test route
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: true,
    message: 'Server Live',
  });
});

//Handle undefined route.
app.use(notFound);

//Handle Error.
app.use(globalErrorHandler);

export default app;
