const express = require("express");
import { Request, Response, request } from "express";
import webhook from "@controllers/webhook";
import mongooseRequest from "@controllers/mongoose"



const routes = express()


routes.post('/', async (req: Request, res: Response) => webhook.handler(req, res));

routes.get("/pedidos", async (req: Request, res: Response) => mongooseRequest.index(req, res))


export default routes 
