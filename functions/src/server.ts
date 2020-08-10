import * as functions from 'firebase-functions'
import routes from './routes'


export const webhook = functions.https.onRequest(routes)











