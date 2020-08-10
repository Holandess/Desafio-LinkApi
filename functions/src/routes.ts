const express = require("express");
import { Request, Response } from "express";
import webhook from "@controllers/webhook";


const routes = express()


routes.get('/', async (req: Request, res: Response) => webhook.handler(req, res));




export default routes 
