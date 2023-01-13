import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes'
//get users/            get do user
//get users/:uuid       get pelo id
//post /users           salva novo user
//put /users/:uuid      edita user
//delete /users/:uuid   deleta user

const usersRoute = Router();     //permite configurações de rotas

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Tabatha' }]
    res.status(StatusCodes.OK).send(users); 
});

usersRoute.get('/user/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({ uuid })
})

export default usersRoute;
