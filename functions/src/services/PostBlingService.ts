import urlencode from "urlencode";
import axios from 'axios'
import { IPipeDriveRequest } from '@interfaces/IPipeDriveRequest';
import { IProductsRequest } from "@interfaces/IProductsRequest"
import { config } from "firebase-functions/lib/config";
const { bling_url, bling_api_key } = config().env


async function requestBlingService(pipeDriveRequest: IPipeDriveRequest, products: IProductsRequest[]) {

  const xmlRequest = urlencode(`
    <?xml version="1.0" encoding="UTF-8"?>
    <pedido>
    <cliente>
    <nome>${pipeDriveRequest.person_name}</nome>
    </cliente>
    <itens>
    ${products.map(
    prod => `
      <item>
      <codigo>${prod.product_id}</codigo>
      <descricao>${prod.name}</descricao>
      <un>${prod.quantity_formatted}</un>
      <qtde>${prod.quantity_formatted}</qtde>
      <vlr_unit>${prod.item_price}</vlr_unit>
      </item>`,
  )}
    </itens>
    <parcelas>
    <parcela>
    <data>${pipeDriveRequest.won_time}</data>
    <vlr>100</vlr>
    </parcela>
    </parcelas>
    </pedido>
  `,
  )

  return await (await axios.post(`${bling_url}?apikey=${bling_api_key}&xml=${xmlRequest}`)).data
}


export { requestBlingService }