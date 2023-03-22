import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as http from 'http';
import * as jwt from "jsonwebtoken";
import routes from "./routes/routes";
import { Server } from "socket.io";
import SocketHandler from "./services/SocketHandler";
import * as console from "console";
const serveStatic = require('serve-static');
const path = require('path');


//const serverAddress = 'http://localhost:8080'
const serverAddress = 'http://192.168.11.20:9090'
//const serverAddress = 'http://localhost:9090'

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use( '/' ,express.static(path.join(__dirname, '/wwwroot/')));
    const port = process.env.port || 2000 ;//process.env.port || 3300;
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    app.use(cors({
        origin: serverAddress,
        credentials: true
    }));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes);


    const server = http.createServer(app)
    const io = new Server(server , {
        allowEIO3: true,
        path: '/socket',
        cors: {
            origin: serverAddress,
            credentials: true
        }
    });

    io.on("connection", (socket) => {
        SocketHandler.handler(io, socket)
    });

    server.listen(port, () => {
        console.log("Сервер начал прослушивание запросов на порту: " + port);
        console.log(process.env.port);
    });

    

}).catch(error => console.log(error));
