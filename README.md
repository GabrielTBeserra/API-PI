# API-PI

# Dependencias

express <br/>
mongoose<br/>
mongoose-paginate<br/>
require-dir<br/>
nodemon<br/>

## ENDPOINTS

### INSERT

`http://localhost:3001/api/insert`

Passar pelo body o seguinte objeto

```js
{
	"name": "Coringa",
	"categoria": [
		"Drama",
		"Acao"
	],
	"director": "Todd Phillips",
	"rating": 8.5,
	"date": "10/04/2019",
	"type": "movie",
	"bannerurl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
	"sinopse": "Arthur Fleck trabalha como palhaço e é um aspirante a comediante de stand-up. Ele tem problemas de saúde mental, parte dos quais envolve risos incontroláveis. Os tempos são difíceis e, devido aos seus problemas e ocupação, Arthur tem um tempo ainda pior do que a maioria. Com o tempo, essas questões o suportam, moldando suas ações, fazendo-o assumir a persona que ele é mais conhecido como... O Coringa",
	"comentarys": []
}
```

### Adicionar comentario

`http://localhost:3001/api/addcom/<ID>`

Adiciona um comentario a um filme especifico
Objeto a ser enviado pelo body

```js
{
    "userid": 0,
    "username": "teste",
    "rating": 2,
	"commentary": "Muito Bom!"
}
```

### Visualizar apenas um filme

`http://localhost:3001/api/info/<ID>`

Retorno

```json
{
  "categoria": ["Drama", "Acao"],
  "comentarys": [
    {
      "userid": 51651,
      "username": "teles",
      "id": "1asd51aaasdd",
      "rating": 4,
      "commentary": "Muito bom!"
    },
    {
      "userid": 512651,
      "username": "fernando",
      "id": "41651ujasbduiaiusd",
      "rating": 4,
      "commentary": "Muito bom 2!"
    }
  ],
  "_id": "5ef36281f7002d1910aafbb5",
  "name": "Coringa",
  "director": "Todd Phillips",
  "rating": "8.5",
  "date": "2019-10-04T03:00:00.000Z",
  "type": "movie",
  "bannerurl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  "sinopse": "Arthur Fleck trabalha como palhaço e é um aspirante a comediante de stand-up. Ele tem problemas de saúde mental, parte dos quais envolve risos incontroláveis. Os tempos são difíceis e, devido aos seus problemas e ocupação, Arthur tem um tempo ainda pior do que a maioria. Com o tempo, essas questões o suportam, moldando suas ações, fazendo-o assumir a persona que ele é mais conhecido como... O Coringa",
  "__v": 0
}
```

### Obter todos filmes

`http://localhost:3001/api/movies`

Sera retornado um array de objetos

### Obter todos comentarios que um usuario fez

`http://localhost:3001/api/getcoms/<ID>`

Retorno

```json
[
  {
    "userid": 51651,
    "username": "teles",
    "id": "1asd51aad",
    "rating": 4,
    "commentary": "Muito bom!",
    "movieId": "5ef36281f7002d1910aafbb5",
    "movieName": "Coringa"
  },
  {
    "userid": 51651,
    "username": "telesasdasdas",
    "rating": 4,
    "id": "24fasuj5",
    "commentary": "Muito bom!asdasdasdasd",
    "movieId": "5ef36ae564653c2ef0d77327",
    "movieName": "Coringa teste"
  }
]
```

### Buscar filme por nome

`http://localhost:3001/api/search/<TERMO>`

Retorno de exemplo com a url `http://localhost:3001/api/search/teste`

```json
{
  "docs": [
    {
      "categoria": ["Drama", "Acao"],
      "comentarys": [
        {
          "userid": 51651,
          "username": "telesasdasdas",
          "rating": 4,
          "commentary": "Muito bom!asdasdasdasd"
        },
        {
          "userid": 512651,
          "username": "fernandoasdasdasd",
          "rating": 4,
          "commentary": "Muito bom 2!asdasdasdasd"
        }
      ],
      "_id": "5ef36ae564653c2ef0d77327",
      "name": "Coringa teste",
      "director": "Todd Phillips",
      "rating": "8.5",
      "date": "2019-10-04T03:00:00.000Z",
      "type": "movie",
      "bannerurl": "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
      "sinopse": "Arthur Fleck trabalha como palhaço e é um aspirante a comediante de stand-up. Ele tem problemas de saúde mental, parte dos quais envolve risos incontroláveis. Os tempos são difíceis e, devido aos seus problemas e ocupação, Arthur tem um tempo ainda pior do que a maioria. Com o tempo, essas questões o suportam, moldando suas ações, fazendo-o assumir a persona que ele é mais conhecido como... O Coringa",
      "__v": 0
    }
  ]
}
```

### Removendo comentarios

`http://localhost:3001/api/remcom/<MOVIE_ID>/<COMMENTARY_ID>`

Exemplo `http://localhost:3001/api/remcom/5ef36281f7002d1910aafbb5/0.fxci3xb6awk`
