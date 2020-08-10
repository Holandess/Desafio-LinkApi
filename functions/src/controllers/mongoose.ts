import { Request, Response } from "express";
import { mongooseGetDocument } from "@services/MongoService";
import { document } from "firebase-functions/lib/providers/firestore";

class MongooseRequest {
  public async index(req: Request, res: Response) {
    try {
      const document = await mongooseGetDocument()
      if (document) {
        res.status(201).send(document)
      }
    } catch (error) {
      res.status(404).send("Error when searching for document")
    }
  }
}

export default new MongooseRequest()