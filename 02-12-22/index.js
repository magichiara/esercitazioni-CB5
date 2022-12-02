/* --- VIDEOTECA 01-12-22 --- */

// REQUIRE MODULES
const express = require("express");
const fs = require("fs");
const app = express(); //Immagazzino express in app
const readData = () => {
  const attoriData = fs.readFileSync("./src/attori.json", "utf8");
  return JSON.parse(attoriData);
};
const readDataReg = () => {
  const registiData = fs.readFileSync("./src/registi.json", "utf8");
  return JSON.parse(registiData);
};

const middleware = (req, res, next) => {
  console.log("middleware eseguita");
  next();
};

app.use(express.static("public")); //Visiblità cartella public
app.use(express.urlencoded({ extended: false }));

// SERVER
app.listen(3000, () => {
  console.log("server is listening");
});

app.get("/home", middleware, function (req, res) {
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
    res.status(400).json({ error: "bad request" });
  }
  if (req.body.cognome == undefined) {
    res.status(400).json({ error: "bad request" });
  }

  const attori = readData();
  const nuovoAttore = {
    id: attori.length == 0 ? 1 : attori[attori.length - 1].id + 1,
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

// PUT ATTORE
app.put("/attore", function (req, res) {
  console.log(8);
  if (req.body.nome == undefined) {
    res.status(400).json({ error: "bad request" });
  }
  if (req.body.cognome == undefined) {
    res.status(400).json({ error: "bad request" });
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
  const index = attori.findIndex((attore) => {
    return attore.id === nuovoAttore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovoAttore);
    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).json({ res: "Attore aggiornato" });
  } else {
    res.status(200).json({ res: "Attore non trovato" });
  }
});

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

/* -------------------------------------------------------------- */

// GET REGISTI
app.get("/registi", function (req, res) {
  //Lettura dati
  const registi = readDataReg();
  const registiArr = registi.map((reg) => {
    const id = reg.id;
    const nome = reg.nome;
    const cognome = reg.cognome;
    const data = reg.data_nascita;
    return { id, nome, cognome, data };
  });
  res.json(registiArr);
});

// GET REGISTA
app.get("/regista", function (req, res) {
  const registaId = req.query.id; //Lettura parametro
  if (isNaN(registaId || registaId < 0)) {
    res.status(400).json({ error: "bad request" });
    return;
  }
  const registi = readDataReg(); //Lettura dati
  const regista = registi.find((regista) => regista.id == registaId);
  if (!regista) {
    res.status(404).json({ error: "not found" });
    return;
  }
  res.status(200).json(regista);
});

// POST REGISTA
app.post("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(404).json({ error: "not found" });
  }
  if (req.body.cognome == undefined) {
    res.status(400).json({ error: "not found" });
  }

  const registi = readDataReg();
  const nuovoRegista = {
    id: registi.length == 0 ? 1 : registi[registi.length - 1].id + 1,
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
  registi.push(nuovoRegista);

  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).json(registi);
});

// PUT REGISTA
app.put("/regista", function (req, res) {
  console.log(8);
  if (req.body.nome == undefined) {
    res.status(400).json({ error: "bad request" });
  }
  if (req.body.cognome == undefined) {
    res.status(400).json({ error: "bad request" });
  }
  const nuovoRegista = {
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

  const registi = readDataReg();
  const index = registi.findIndex((regista) => {
    return regista.id === nuovoRegista.id;
  });

  if (index > 0) {
    registi.splice(index, 1, nuovoRegista);
    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).json({ res: "regista aggiornato" });
  } else {
    res.status(200).json({ res: "regista non trovato" });
  }
});

// DELETE REGISTA
app.delete("/regista", function (req, res) {
  if (req.body.id === undefined) {
    res.status(400).json({ error: "not found" });
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).json({ error: "not found" });
  }
  const deleteId = req.body.id;
  const registi = readDataReg();
  const registiArr = registi.filter((regista) => {
    return regista.id == deleteId;
  });
  if (registiArr.length > 0) {
    const deleteArr = registi.filter((regista) => {
      return regista.id != deleteId;
    });
    fs.writeFileSync("./src/registi.json", JSON.stringify(deleteArr));
    res.status(200).json({ res: "regista cancellato" });
  } else {
    res.status(200).json({ res: "regista da cancellare non trovato" });
  }
});
