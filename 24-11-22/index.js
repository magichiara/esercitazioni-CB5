/* --- ESERCITAZIONE 24-11-22 ---*/

// FUNZIONI OPERAZIONI
function somma(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function sottrazione(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function divisione(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

function moltiplicazione(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("server in esecuzione sulla porta 3000");
}); // questo avvia il server

// SOMMA
app.get("/pagina_somma", function (req, res) {
  res.sendFile("somma.html", { root: __dirname + "/src/html" });
}); // res.sendFile sostituisce res.write, res.delete ecc prima dell'uso di express. Racchiude tutto. prende due parametri: il nome del file da allegare e un oggetto json con il percorso del file. In questo caso root (perscorso) prende __dirname che, attraverso node, comprende che in dirname deve prendere il percorso assoluto fino alla cartella di progetto. si aggiungono poi i percorsi interni alla cartella di progetto: in questo caso /src/html per arrivare alla cartella html interna a src nella cartella 24-11-22

app.get("/somma", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro 1:" + param1, "parametro 2:" + param2);
  let risultato = somma(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send(" " + risultato);
});

// SOTTRAZIONE
app.get("/pagina_sottrazione", function (req, res) {
  res.sendFile("sottrazione.html", { root: __dirname + "/src/html" });
});

app.get("/sottrazione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro 1:" + param1, "parametro 2:" + param2);
  let risultato = sottrazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send(" " + risultato);
});

// MOLTIPLICAZIONE
app.get("/pagina_moltiplicazione", function (req, res) {
  res.sendFile("moltiplicazione.html", { root: __dirname + "/src/html" });
});

app.get("/moltiplicazione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro 1:" + param1, "parametro 2:" + param2);
  let risultato = moltiplicazione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send(" " + risultato);
});

// DIVISIONE
app.get("/pagina_divisione", function (req, res) {
  res.sendFile("divisione.html", { root: __dirname + "/src/html" });
});

app.get("/divisione", function (req, res) {
  let param1 = req.query.param1;
  let param2 = req.query.param2;
  console.log("parametro 1:" + param1, "parametro 2:" + param2);
  let risultato = divisione(param1, param2);
  console.log("Risultato: " + risultato);
  res.status(200).send(" " + risultato);
});
