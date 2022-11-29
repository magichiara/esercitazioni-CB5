/* --- VIDEOTECA 29-11-22 --- */

// REQUIRE MODULES
const express = require("express");
const fs = require("fs");
const app = express(); //Immagazzino express in app
const readData = () => {
  const attoriData = fs.readFileSync("./src/attori.json", "utf8");
  return JSON.parse(attoriData);
};
app.use(express.static("public")); //Visiblità cartella public
app.use(express.urlencoded({ extended: false }));

// SERVER
app.listen(3000, () => {
  console.log("server is listening");
});

app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

// GET ATTORI
app.get("/attori", function (req, res) {
  //Lettura dati
  const attori = readData();
  const attoriArr = attori.map((att) => {
    const id = att.id;
    const nome = att.nome;
    const cognome = att.cognome;
    const data = att.data_nascita;
    return { id, nome, cognome, data };
  });
  res.json(attoriArr);
});

// GET ATTORE
app.get("/attore", function (req, res) {
  const attoreId = req.query.id; //Lettura parametro
  if (isNaN(attoreId || attoreId < 0)) {
    res.status(400).json({ error: "bad request" });
    return;
  }
  const attori = readData(); //Lettura dati
  const attore = attori.find((attore) => attore.id == attoreId);
  if (!attore) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(attore);
});

// POST ATTORE
app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(404).json({ error: "not found" });
  }
  if (req.body.cognome == undefined) {
    res.status(400).json({ error: "not found" });
  }
  const nuovoAttore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };
  const attori = readData();
  const index = Number(nuovoAttore.id) - 1;
  console.log("Nuovo indice: " + index);
  attori[index] = nuovoAttore;
  console.log(attori);
  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).send("Attore creato");
});
