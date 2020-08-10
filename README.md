Desafio LinkApi.
Desenvolver uma api que recebe oportunidades do Pipedrive com o status igual a ganho, e inserir no Bling.


Solução: Utilizar Cloud Functions, criar um Webhook para escutar todas modificações do pipedrive, quando o status mudar para "won" adicionar no bling como pedido e salvar no mongoDB.

Webhook URL: https://us-central1-linkapi-8d3fe.cloudfunctions.net/webhook

Path para buscar todos pedidos do dia: GET https://us-central1-linkapi-8d3fe.cloudfunctions.net/webhook/pedidos

Caso queira testar sem configurar nada, pode enviar uma request para a url do wehook com o body que o pipedrive gera com o status igual a "won", após o webhook vai adicionar na minha conta pessoal do pipedrive e no mongoDB, com a url de consulta pode visualizar as informações dos pedidos do dia.

OBS: Deixe a url do webhook desprotegida de propósito para envio do body sem autenticação.


## Passo a passo

Você precisará das seguintes dependências para trabalhar neste projeto:

- [Node 10.x.x](https://github.com/creationix/nvm)
- [Nodemon 2.x.x](https://github.com/remy/nodemon)
- [Axios 0.19.2](https://github.com/axios/axios)
- [Express 4.17.1](https://github.com/axios/axios)
- [firebase-admin 9.0.0](https://github.com/firebase/firebase-admin-node)
- [firebase-functions 3.9.0](https://github.com/firebase/firebase-functions)

Em seguida, instale os pacotes usando os comandos:

```sh
$ yarn
```

ou

```sh
$ npm install
```

### Variaveis de ambiente 

Todo o projeto foi feito em serviços do Google cloud platform.
Caso queira ter acesso alguma variável de ambiente é preciso ter um projeto no Firebase Google Cloud.

Todas variáveis de ambientes estão setadas diretamente na cloud functions, para alterar qualquer variável de ambiente utilize o comando:

```sh
$ cd functions && yarn firebase:config:set env.example 
```

### Testar localmente
### 
Se quiser testar local é preciso ter todas variáveis de ambiente setada no projeto do Google Cloud.
O comando a baixo emula uma "Cloud Functions" local.
```sh
$ yarn serve
```

ou

```sh
$ npm start
```
