const pokeSrc = "https://pokeapi.co/api/v2/pokemon/?limit=150";

fetch(pokeSrc)
  .then((res) => res.json())
  .then((pokedex) => {
    pokedex.results.forEach((data) =>
      fetch(data.url).then((res) => res.json().then((poke) => createCard(poke)))
    );
  });

const bodyEl = document.querySelector("body");
const createCard = (poke) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", poke.sprites.other.dream_world.front_default);

  const idEl = document.createElement("h6");
  idEl.className = "card-id";
  idEl.textContent = poke.id;

  const nameEl = document.createElement("h2");
  nameEl.className = "card-name";
  nameEl.textContent = poke.name;

  const typeEl = document.createElement("h4");
  typeEl.className = "card-type";
  typeEl.textContent = poke.types[0].type.name;

  cardEl.append(imgEl, idEl, nameEl, typeEl);
  const pokedexEl = document.querySelector(".pokedex");
  pokedexEl.appendChild(cardEl);

  switch (poke.types[0].type.name) {
    case "electric":
      cardEl.style = "background: #FCF7DE";
      break;
    case "water":
      cardEl.style = "background: #DEF3FD";
      break;
    case "ground":
      cardEl.style = "background: #f4e7da";
      break;
    case "rock":
      cardEl.style = "background: #d5d5d4";
      break;
    case "fairy":
      cardEl.style = "background: #fceaff";
      break;
    case "poison":
      cardEl.style = "background: #98d7a5";
      break;
    case "bug":
      cardEl.style = "background: #f8d5a3";
      break;
    case "dragon":
      cardEl.style = "background: #97b3e";
      break;
    case "psychic":
      cardEl.style = "background: #eaeda1";
      break;
    case "flying":
      cardEl.style = "background: #F5F5F5";
      break;
    case "fighting":
      cardEl.style = "background: #E6E0D4";
      break;
    case "normal":
      cardEl.style = "background:#F5F5F5";
      break;
    case "fire":
      cardEl.style = "background: #FDDFDF";
      break;
    case "grass":
      cardEl.style = "background: #DEFDE0";
      break;
    case "ghost":
      cardEl.style = "background: #705898";
      break;
    case "ice":
      cardEl.style = "background: #98d8d8";
      break;
  }
};
