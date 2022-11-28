/* --- ESERCITAZIONE 28-11-22 --- */

const express = require("express"); //importazione express module
const app = express(); //assegnazione di express ad una const
const calcModule = require("./src/calculator_module"); //importazione calculator module

// VISIBILITA DELLA CARTELLA PUBLIC
app.use(express.static("public"));

// SERVER SULLA PORTA 3000
app.listen(3000, () => {
  console.log("Server in ascolto sulla porta 3000");
});

app.get("/homepage", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

// GET REQUEST
app.get("/calcolatrice", function (req, res) {
  console.log(req.query);
  let par1 = req.query.param1;
  let par2 = req.query.param2;
  let par3 = req.query.param3; //terzo parametro: operazione
  let result;
  switch (par3) {
    case "somma":
      result = calcModule.somma(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "sottrazione":
      result = calcModule.sottrazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "moltiplicazione":
      result = calcModule.moltiplicazione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "divisione":
      result = calcModule.divisione(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    case "modulo":
      result = calcModule.modulo(par1, par2);
      res.status(200).json({ risultato: result });
      break;
    default:
      console.log("operazione non valida");
  }
});
