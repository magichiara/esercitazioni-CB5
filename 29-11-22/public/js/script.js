/* --- VIDEOTECA 29-11-22 --- */

const actorsUrl = "http://localhost:3000/attori/";
const containerEl = document.querySelector(".actors_gallery");
// CREAZIONE CARD
const createCard = (items) => {
  for (let item of items) {
    const cardEl = document.createElement("div");
    const idEl = document.createElement("h1");
    const imgEl = document.createElement("div");
    const infoEl = document.createElement("div");
    const nameEl = document.createElement("h4");
    const surnameEl = document.createElement("h4");
    const birthEl = document.createElement("h5");

    cardEl.className = "card";
    idEl.className = "card-id";
    imgEl.className = "card-img";
    infoEl.className = "card-info";
    nameEl.className = "card-name";
    surnameEl.className = "card-surname";
    birthEl.className = "card-birth";

    idEl.textContent = createId(item.id);
    nameEl.textContent = item.nome.toUpperCase();
    surnameEl.textContent = item.cognome.toUpperCase();
    birthEl.textContent = item.data;

    infoEl.append(nameEl, surnameEl, birthEl);
    cardEl.append(idEl, imgEl, infoEl);
    containerEl.appendChild(cardEl);
    function createId(id) {
      if (!id) return null;
      if (id < 10) {
        return `0${id}`;
      } else if (id < 100) {
        return `0${id}`;
      }
      return id;
    }
  }
};

// FETCH URL
fetch(actorsUrl)
  .then((res) => res.json())
  .then((res) => createCard(res));
