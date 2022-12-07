/* -------- VIDEOTECA 06-12-22 -------- */

// REQUIRE MODULES
const express = require("express");
const fs = require("fs");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(express.static("public")); // Visiblità cartella public
app.use(express.urlencoded({ extended: false }));

// FUNCTION MIDDLEWARE
const middleware = (req, res, next) => {
  console.log("middleware eseguita");
  next();
};

// SERVER -- CONNECTION TO MONGOOSE
mongoose.connect("mongodb://localhost:27017/videoteca").then(
  app.listen(3000, () => {
    console.log("server is listening");
  })
);

app.get("/home", middleware, function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

// MODEL ATTORI
const actSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});

const Actor = mongoose.model("Actor", actSchema);

// GET ATTORI - MONGODB
const getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.status(200).json(actors);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
app.get("/attori", getAllActors);

// POST ATTORE - MONGODB
const postActor = async (req, res) => {
  const actor = req.body;
  const newActor = new Actor(actor);
  try {
    await newActor.save();
    res.status(201).json(newActor);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.post("/attore", postActor);

// DELETE ATTORI - MONGODB
const deleteActor = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndDelete(id);
    res.status(200).json({ msg: "attore eliminato con successo" });
  } catch {
    res.status(409).json({ err: "ERR" });
  }
};

app.delete("/attore", deleteActor);

/*
// UPDATE ATTORE - MONGODB ---- NON FUNZIONANTE
const putActor = async (req, res) => {
  const id = req.query.id;
  const body = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Actor.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json({ msg: "attore aggiornato con successo" });
  } catch (err) {
    res.staut(404).json({ err: "ERR" });
  }
  app.put("/attore", putActor);
*/

// MODEL REGISTI
const dirSchema = new mongoose.Schema({
  nome: String,
  cognome: String,
  data_nascita: String,
  riconoscimenti: String,
  inizio_attivita: String,
  fine_attivita: String,
  in_attivita: Boolean,
});

const Director = mongoose.model("Director", dirSchema);

// GET REGISTI - MONGODB
const getAllDirectors = async (req, res) => {
  try {
    const directors = await Director.find();
    res.status(200).json(directors);
  } catch (err) {
    res.status(404).json({ err: "ERR" });
  }
};
app.get("/registi", getAllDirectors);

// POST REGISTA - MONGODB
const postDirector = async (req, res) => {
  const director = req.body;
  const newDirector = new Director(director);
  try {
    await newDirector.save();
    res.status(201).json(newDirector);
  } catch (err) {
    res.status(409).json({ err: "ERR" });
  }
};
app.post("/regista", postDirector);

// DELETE REGISTA - MONGODB
const deleteDirector = async (req, res) => {
  const id = req.body.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ err: "id non conforme" });
  }
  try {
    await Director.findByIdAndDelete(id);
    res.status(200).json({ msg: "regista eliminato con successo" });
  } catch {
    res.status(409).json({ err: "ERR" });
  }
};
app.delete("/regista", deleteDirector);
