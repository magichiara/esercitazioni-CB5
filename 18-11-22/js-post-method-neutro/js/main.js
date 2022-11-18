// ESERCITAZIONE 18-11-22

import { c, q, GET, POST, DELETE, PATCH, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

let id;

// Form Post
const form = document.forms.pokemon;
const element = form.elements;
// Evento Post
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

// Form Patch
const formPatch = document.forms.pokemonPatch;
const elementsPatch = formPatch.elements;
// Evento Patch
formPatch.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = elementsPatch.id.value;
  const data = {
    name: elementsPatch.name.value,
    type: elementsPatch.type.value,
  };
  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
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

  const formPatchEdit = document.forms.pokemonPatch;
  const elementsPatchEdit = formPatchEdit.elements;

  cardEl.addEventListener("click", () => {
    elementsPatchEdit.id.value = resPoke.id;
    elementsPatchEdit.name.value = resPoke.name;
    elementsPatchEdit.type.value = resPoke.type;
  });

  cardEl.addEventListener("click", () => {
    q("#secondform").scrollIntoView({
      behavior: "smooth",
    });
  });
};

window.onload = GET(url).then((res) => {
  id = res[res.length - 1].id;
  console.log(id);
  res.map((pkm) => {
    createCard(url, pkm.id, pkm);
  });
});
