import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello, world');
});

router.post('/', (req, res) => {
    console.log(req.body);
    //return res.send(req.body);
    //return res.json(req.body);
    return res.status(StatusCodes.ACCEPTED).json(req.body);
})

export {router};