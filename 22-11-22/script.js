// ESERCITAZIONE 22/11/22

import {
  somma,
  sottrazione,
  divisione,
  moltiplicazione,
} from "./calculator.js";
import http from "http";
import url from "url";
import fs from "fs"; // lettura dei file

const server = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true).pathname; // percorso del server (Url) -> localhost:3000/
  const params = url.parse(req.url, true).query;
  const { param1, param2 } = params; // destrutturazione
  //console.log(param1, param2);
  switch (myUrl) {
    case "/home":
      res.write("Benvenuto nella Home");
      break;
    case "/calcolatrice":
      const data = fs.readFileSync("./html/calculator.html");
      res.write(data.toString());
      break;
    case "/somma":
      const dataSum = fs.readFileSync("./html/somma.html");
      res.write(dataSum.toString());
      res.write(`${somma(param1, param2)}`);
      break;
    case "/sottrazione":
      const dataSub = fs.readFileSync("./html/sottrazione.html");
      res.write(dataSub.toString());
      res.write(`${sottrazione(param1, param2)}`);
      break;
    case "/moltiplicazione":
      const dataMult = fs.readFileSync("./html/moltiplicazione.html");
      res.write(dataMult.toString());
      res.write(`${moltiplicazione(param1, param2)}`);
      break;
    case "/divisione":
      const dataDiv = fs.readFileSync("./html/divisione.html");
      res.write(dataDiv.toString());
      res.write(`${divisione(param1, param2)}`);
      break;
    case "/style.css":
      const style = fs.readFileSync("./style.css");
      res.write(style.toString());
    default:
      res.write(
        "<h1>ERRORE</h1><p>La pagina non esiste, torna alla <a href='/home'>Home<a></p>"
      );
  }
  res.end();
});

server.listen(3000);
console.log("server in ascolto");
