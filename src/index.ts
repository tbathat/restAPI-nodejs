import express, { Request, Response, NextFunction } from 'express';
import usersRoute from "./routes/users.route";

const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Configurações de Rotas
app.use(usersRoute);

app.get('/status', (_req: Request, _res: Response, _next: NextFunction) => {  //especifica a rota e o resolver, callback//
    _res.status(200).send({ foo: 'sucesso' });
});

//Inicialização do servidor express
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!')
});
