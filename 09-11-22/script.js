/* ------------- ESERCIZIO 09-11-22 ------------- */

const bodyEl = document.querySelector("body");

// CREAZIONE CARDS
const createCard = (data) => {
  const cardEl = document.createElement("div");
  const imgFrameEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const idEl = document.createElement("h4");
  const nameEl = document.createElement("h1");
  const typeEl = document.createElement("h4");

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
  cardEl.append(imgFrameEl, idEl, nameEl, typeEl);
  const pokeGalleryEl = document.querySelector(".poke-gallery");
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

// FETCH COL CICLO FOR
for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json())
    .then((res) => createCard(res));
}

// LOADING
const loadingEl = document.querySelector(".loading");
const loadArray = [];
for (let i = 1; i <= 150; i++) {
  loadArray.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
}

let request = loadArray.map((url) => {
  loadingEl.classList.add("active");
  return fetch(url).then((res) => res.json());
});
Promise.all(request)
  .then((res) => res.map((r) => createPokemonCard(r)))
  .finally(() => loadingEl.classList.remove("active"));
