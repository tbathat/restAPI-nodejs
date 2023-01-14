import { Router, NextFunction, Response, Request } from 'express';
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (_req: Request, _res: Response, _next: NextFunction) => {
    _res.sendStatus(StatusCodes.OK);
});

export default statusRoute;