/* ------------- ESERCIZIO 11-11-22 ------------- */
let i = 1;

let result = `https://pokeapi.co/api/v2/pokemon/${i}`;

fetch(result)
  .then((res) => res.json())
  .then((data) => createCard(data));

const bodyEl = document.querySelector("body");
const cardEl = document.createElement("div");
const imgFrameEl = document.createElement("div");
const imgEl = document.createElement("img");
const idEl = document.createElement("h4");
const nameEl = document.createElement("h1");
const typeEl = document.createElement("h4");
const pokeGalleryEl = document.querySelector(".poke-gallery");

// CREAZIONE CARD
const createCard = (data) => {
  cardEl.className = "card";
  cardEl.classList.add(`bg-${data.types[0].type.name}`);
  imgFrameEl.className = "card-img__frame";
  imgEl.className = "card-img";
  idEl.className = "card-id";
  nameEl.className = "card-name";
  typeEl.className = "card-type";

  nameEl.textContent = data.name;
  imgEl.setAttribute("src", data.sprites.other.dream_world.front_default);
  imgEl.setAttribute("alt", data.name);
  idEl.textContent = "# " + createId(data.id);
  typeEl.textContent = `Type: ${data.types[0].type.name}`;

  imgFrameEl.appendChild(imgEl);
  cardEl.append(imgFrameEl, nameEl, idEl, typeEl);
  pokeGalleryEl.appendChild(cardEl);

  //Funzione ID dinamico
  function createId(id) {
    if (!id) return null;
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    }
    return id;
  }
};

const prevBtnEl = document.querySelector(".prev");
const nextBtnEl = document.querySelector(".next");

nextBtnEl.addEventListener("click", () => {
  i++;
  if (i >= 10) nextBtnEl.disabled = true;
  if (i === 1) prevBtnEl.disabled = true;
  else prevBtnEl.disabled = false;
  result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((data) => createCard(data));
});

prevBtnEl.addEventListener("click", () => {
  if (i <= 2) {
    prevBtnEl.disabled = true;
    nextBtnEl.disabled = false;
  }
  i--;
  result = `https://pokeapi.co/api/v2/pokemon/${i}`;
  fetch(result)
    .then((res) => res.json())
    .then((data) => createCard(data));
});

window.onload = prevBtnEl.disabled = true;
