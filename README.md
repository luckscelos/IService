# IService-M3

O que é a nossa aplicação?
IService é uma aplicação criada para ajudar pessoas com dificuldade em contratar certos tipos de serviço. Também ajuda os prestadores de serviço a serem encontrados e contratados com mais facilidade.

O que nossa aplicação faz?
Ajudamos as pessoas a contratar serviços específicos que nem sempre são fáceis de encontrar. Você pode contratar um pedreiro para um pequeno reparo, bombeiro hidráulico para manutenção e vários outros serviços. Além disso ajudamos os prestadores de serviço serem mais facilmente encontrado por quem necessita de um serviço mais informal.

Quais são os requisitos para utilizar nossa aplicação?
Como contratante basta entrar na nossa aplicação, escolher o serviço desejado, entrar em contato com um de nossos parceiros e pronto!
Como prestador de serviço basta fazer o cadastro na nossa plataforma preenchendo os dados como nome, contato e tipo de serviço prestado. A partir daí é só aguardar as pessoas entrarem em contato com você.

<h1 align="center">Iservice - API</h1>

Está é uma Fake API provisória para a conclusão do trabalho final do Grupo 7 do M3.
A url base da API é [https://iserviceapig7.herokuapp.com/](https://iserviceapig7.herokuapp.com/).

## **Endpoints**

A API possui um total de X endpoints.

## **Rotas que não precisam de autenticação**

<h2 align="center">Listar serviços</h2>
O usuário sem estar logado consegue visualizar os tipos de serviço sem precisar estar logado ou se cadastrar.

`GET /services - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "age": 27,
    "zone": "Tecnologia",
    "profession": "Desenvolvedor Front-end",
    "experience": 3,
    "contact": 5514996709948,
    "description": "Lorem ipsum",
    "user_id": 1,
    "id": 1
  }
]
```

Podemos utilizar query params para mudar a paginação da lista, podendo alterar quantos usuários queremos visualinar no perPage e alterar a página n parâmetro page. Uma requisição no /users irá trazer 15 prestadores de serviço na página 1. COm o parâmetro services podemos filtrar por serviços.

`COLOCAR AQUI A FORMA DE REQUISIÇÃO COM O FORMATO DA RESPOSTA - STATUS 200`

**\*\*\***COLOCAR AQUI O JSON DO FORMATO**\*\*\***

Podemos acessar um serviço específico utilizando o seguinte endpoint:

`GET /services/:service_id - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "age": 27,
    "zone": "Tecnologia",
    "profession": "Desenvolvedor Front-end",
    "experience": 3,
    "contact": 5514996709948,
    "description": "Lorem ipsum",
    "user_id": 1,
    "id": 1
  }
]
```

<h2 align="center">Criação de usuário</h2>

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Helbert Abreu",
  "email": "helbert@mail.com",
  "password": "123456",
  "confirm_password": "123456",
  "estate": "Minas Gerais",
  "city": "Belo Horizzonte",
  "address": "Av. Amazonas"
}
```

Caso a requisição seja feita corretamente, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGJlcnRAbWFpbC5jb20iLCJpYXQiOjE2NjE5NDg1NDcsImV4cCI6MTY2MTk1MjE0Nywic3ViIjoiMyJ9.1kWzgUkrkpk25cYaZjXT6z8SDhqErtvPnUW3uDS2Evk",
  "user": {
    "email": "helbert@mail.com",
    "name": "Helbert Abreu",
    "confirm_password": "123456",
    "estate": "Minas Gerais",
    "city": "Belo Horizzonte",
    "address": "Av. Amazonas",
    "id": 3
  }
}
```

<h3>Possíveis erros</h3>

Email já cadastrado:

`POST /users - FORMATO DA RESPOSTA - STATUS 400`

```json
"Email already exists"
```

<h2 align="center">Login</h2>

`POST /login - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "helbert@mail.com",
  "password": "123456"
}
```

Caso a requisição seja feita corretamente, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - 201`

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGJlcnRAbWFpbC5jb20iLCJpYXQiOjE2NjE5NDkzNDcsImV4cCI6MTY2MTk1Mjk0Nywic3ViIjoiMyJ9._h-kw9ETZAfK38GqFt7WhqNFq-rnqV2dNMiXpC_LvQk",
  "user": {
    "email": "helbert@mail.com",
    "id": 3
  }
}
```
