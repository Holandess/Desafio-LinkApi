import OrderClient from '@model/mongooseModel'
import { IPipeDriveRequest } from '@interfaces/IPipeDriveRequest'


async function mongooseCreateDocument(pipeDriveRequest: IPipeDriveRequest) {
  console.log("Create document in db")
  OrderClient.create({
    client: pipeDriveRequest.person_name,
    date: new Date(pipeDriveRequest.won_time),
    total_value: pipeDriveRequest.value
  })
}


async function mongooseGetDocument() {
  return OrderClient.find()
}


export { mongooseCreateDocument, mongooseGetDocument }
