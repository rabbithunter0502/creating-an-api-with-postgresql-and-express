import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dbInstance from './database';
dotenv.config();

const app: express.Application = express()
const address: string = process.env.APP_PORT as string;
const CORS_CONFIG = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}

app.use(cors(CORS_CONFIG));
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    dbInstance.connect().then((res) => {
        console.log(res);
    });
    console.log(`starting app on: ${address}`)
})
