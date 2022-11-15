// ESERCITAZIONE 15-11-22

import { c, q, GET, POST, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

window.onload = GET(url).then((res) => res.map((pkm) => createCard(pkm)));

const createCard = (resPoke) => {
  const pokeGalleryEl = q(".poke-gallery");

  const imgEl = c("div");
  const cardEl = c("div");
  const nameEl = c("h4");
  const typeEl = c("h5");

  cardEl.className = "poke-card";
  cardEl.classList.add(`bg-${resPoke.type}`);
  imgEl.className = "poke-img";
  nameEl.className = "poke-name";
  typeEl.className = "poke-type";
  nameEl.textContent = resPoke.name;
  typeEl.textContent = `Type: ${resPoke.type}`;

  cardEl.append(imgEl, nameEl, typeEl);
  pokeGalleryEl.append(cardEl);
};
