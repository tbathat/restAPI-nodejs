import { Router, Request, Response, NextFunction } from 'express';

//get users/            get do user
//get users/:uuid       get pelo id
//post /users           salva novo user
//put /users/:uuid      edita user
//delete /users/:uuid   deleta user

const usersRoute = Router();     //permite configurações de rotas

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Tabatha' }]
    res.status(200).send(users); 
});

export default usersRoute;
