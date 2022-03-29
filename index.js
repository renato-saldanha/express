const express = require("express");
const app = express();


//caso retire o primeiro parametro, todas as requisições passarão por essa função
app.use((req, res, next) => { //função middleware
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

app.get('/opa', (req, res) => {  //POST
  // res.send("<b>Opa!</b>!");
  console.log("Depois!");  
});

// app.all('/opa', (req, res) => {  //passa geral
//   res.send("<b>Opa!</b>!");
// });

app.listen(3000, () => console.log("Executando..."));
