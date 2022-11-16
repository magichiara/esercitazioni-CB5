// ESERCITAZIONE 16-11-22

import { c, q, GET, POST, DELETE, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

let id;

const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id + 1,
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

const createCard = (url, id, resPoke) => {
  const pokeGalleryEl = q(".poke-gallery");
  const imgEl = c("div");
  const cardEl = c("div");
  const nameEl = c("h4");
  const idEl = c("h4");
  const typeEl = c("h5");
  const deleteBtnEl = c("button");

  cardEl.className = "poke-card";
  cardEl.classList.add(`bg-${resPoke.type}`);
  imgEl.className = "poke-img";
  nameEl.className = "poke-name";
  idEl.className = "poke-id";
  typeEl.className = "poke-type";
  deleteBtnEl.className = "poke-btn";

  nameEl.textContent = resPoke.name;
  idEl.textContent = `#${resPoke.id}`;
  typeEl.textContent = `Type: ${resPoke.type}`;
  deleteBtnEl.textContent = "DELETE";

  cardEl.append(imgEl, nameEl, idEl, typeEl, deleteBtnEl);
  pokeGalleryEl.append(cardEl);

  deleteBtnEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });
};

window.onload = GET(url).then((res) => {
  id = res[res.length - 1].id;
  console.log(id);
  res.map((pkm) => {
    createCard(url, pkm.id, pkm);
  });
});
