import * as functions from 'firebase-functions'
import express from "express"
import routes from './routes'
const app = express()


app.use(express.json())
app.use(routes)


export const webhook = functions.https.onRequest(app)











