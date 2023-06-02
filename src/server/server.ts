import express from 'express';
import { router } from './routes';
import 'dotenv/config'; // inicializa todas as variáveis de ambiente (obs: instalar pacote dotenv antes)


const server = express();

server.use(express.json());
server.use(router);


export { server };