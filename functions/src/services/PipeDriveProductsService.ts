import axios from "axios"
import { config } from "firebase-functions"

const { pipedrive_url, pipedrive_token } = config().env

async function requestProductsPipedrive(dealId: string): Promise<any> {
  return await (await axios.get(`${pipedrive_url}deals/${dealId}/products?start=0&api_token=${pipedrive_token}`)).data.data
}

export { requestProductsPipedrive }