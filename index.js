const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioAPI = require("./api/Usuario");

require("./api/Produto")(app, "Oi Renatinho!");
// OU 
//const produtoAPI = require("./api/Produto");
//produtoAPI(app, "Oi Renatinho!");

app.post('/usuario', usuarioAPI.salvar);
app.get('/usuario', usuarioAPI.obter);


app.use(saudacao("Renato"));

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/corpo", (req, res) => {
  // let corpo = "";
  // req.on("data", (parte) => (corpo += parte));
  // req.on("end", () => res.send(corpo));

  res.send(req.body);
});

//caso retire o primeiro parametro, todas as requisições passarão por essa função
app.use((req, res, next) => {
  //função middleware
  console.log("Antes!");
  next(); //chama a proxima requisição da mesma URL
});

app.use("/opa", (req, res, next) => {
  // res.json([
  //   { id: 1, nome: "iPad", preco: 2999.0 },
  //   { id: 2, nome: "iNada", preco: 9.0 },
  //   { id: 3, nome: "iFode", preco: 9999.0 },
  // ]);

  // res.send("I'm <b>fine</b>!");

  // res.json({
  //   id: 1,
  //   nome:'iPad',
  //   preco: 2999.00,
  // })
  res.json([
    {
      data: [
        { id: 1, nome: "iPad", preco: 2999.0 },
        { id: 2, nome: "iNada", preco: 9.0 },
        { id: 3, nome: "iFode", preco: 9999.0 },
      ],
      count: 30,
    },
  ]);

  console.log("Durante!");
  next();
});

app.get("/cliente/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.get("/cliente/:id", (req, res, next) => {
  //POST
  // res.send("<b>Opa!</b>!");
  let nome;
  switch (parseInt(req.params.id)) {
    case 1:
      nome = "Renato";
      break;
    case 2:
      nome = "João";
      break;
    case 3:
      nome = "Patrick";
      break;
  }

  res.send(`Olá ID: ${nome}`);
  next();
});

app.listen(3000, () => console.log("Executando..."));
