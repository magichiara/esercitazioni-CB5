/* --- VIDEOTECA 30-11-22 --- */

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

  const attori = readData();
  const nuovoAttore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
    // id: req.body.id == undefined ? "" : parseInt(req.body.id),
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
  attori.push(nuovoAttore);

  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).json(attori);
});
/*
  const index = Number(nuovoAttore.id) - 1;
  console.log("Nuovo indice: " + index);
  attori[index] = nuovoAttore;
  console.log(attori);

});
*/

// DELETE ATTORE
app.delete("/attore", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).json({ error: "not found" });
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).json({ error: "not found" });
  }
  const deleteId = req.body.id;
  const attori = readData();
  const attoriArr = attori.filter((attore) => {
    return attore.id == deleteId;
  });
  if (attoriArr.length > 0) {
    const deleteArr = attori.filter((attore) => {
      return attore.id != deleteId;
    });
    fs.writeFileSync("./src/attori.json", JSON.stringify(deleteArr));
    res.status(200).json({ res: "attore cancellato" });
  } else {
    res.status(200).json({ res: "attore da cancellare non trovato" });
  }
});
