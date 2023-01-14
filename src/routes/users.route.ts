import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
//get users/            get do user
//get users/:uuid       get pelo id
//post /users           salva novo user
//put /users/:uuid      edita user
//delete /users/:uuid   deleta user

const usersRoute = Router();     //permite configurações de rotas

usersRoute.get('/users', (_req: Request, _res: Response, _next: NextFunction) => {
    const users = [{ userName: 'Tabatha' }]
    _res.status(StatusCodes.OK).send(users); 
});

usersRoute.get('/users/:uuid', (_req: Request<{ uuid: string }>, _res: Response, _next: NextFunction) => {
    const uuid = _req.params.uuid;

    _res.status(StatusCodes.OK).send({ uuid })
})

usersRoute.post('/users', (_req: Request, _res: Response, _next: NextFunction) => {
    const newUser = _req.body;

    console.log(_req.body);

    _res.status(StatusCodes.CREATED).send(newUser);
});

export default usersRoute;
