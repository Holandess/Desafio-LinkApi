import { Request, Response } from 'express'
import { requestProductsPipedrive } from '@services/PipeDriveProductsService'
import { requestBlingService } from '@services/PostBlingService'
import { IProductsRequest } from "@interfaces/IProductsRequest"
import { IPipeDriveRequest } from '@interfaces/IPipeDriveRequest'
import { mongooseCreateDocument } from '@services/MongoService'


class Webhook {
  public async handler(req: Request, res: Response) {
    if (!req.body.current && req.body.current.status !== "won") {
      res.end()
      return
    }

    const pipeDriveRequest: IPipeDriveRequest = req.body.current

    const pipeDriveProducts: IProductsRequest[] = await requestProductsPipedrive(pipeDriveRequest.id)

    const orderAlreadyExists = await requestBlingService(pipeDriveRequest, pipeDriveProducts)


    if (orderAlreadyExists.retorno.erros) {
      res.status(404).send({ message: orderAlreadyExists })
      throw new Error(JSON.stringify(orderAlreadyExists));
    }

    await mongooseCreateDocument(pipeDriveRequest)
    console.log("Created order!");

    res.status(201).send({ message: "Created order!" })
  }
}

export default new Webhook()
