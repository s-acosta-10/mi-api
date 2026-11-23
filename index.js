const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hola");
});

app.get("/suma", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const suma = a + b;
  res.send(`La suma de ${a} y ${b} es ${suma}`);
});

app.get("/suma-dinamica", (req, res) => {
  const valores = Object.values(req.query);              // ["10", "5", "8"]
  const numeros = valores.map(v => Number(v));           // [10, 5, 8]
  const total = numeros.reduce((acum, n) => acum + n, 0); // 23
  res.send(String(total));
});

app.listen(3000, () => console.log("Servidor en puerto 3000"));