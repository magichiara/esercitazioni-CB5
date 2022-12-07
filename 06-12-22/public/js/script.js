/* --- VIDEOTECA 06-12-22 --- */

const actorsUrl = "http://localhost:3000/attori/";
const containerActEl = document.querySelector(".act_gallery");

const actorName = document.querySelector(".actorName");
const actorSurname = document.querySelector(".actorSurname");
const actorYob = document.querySelector(".actorYob");
const addBtn = document.querySelector(".add-btn");

// CREAZIONE CARD
const createCardAct = (items) => {
  for (let item of items) {
    const cardEl = document.createElement("div");
    const idEl = document.createElement("h1");
    const imgEl = document.createElement("div");
    const infoEl = document.createElement("div");
    const nameEl = document.createElement("h4");
    const surnameEl = document.createElement("h4");
    const delBtnEl = document.createElement("button");

    cardEl.className = "card";
    idEl.className = "card-id";
    imgEl.className = "card-img";
    infoEl.className = "card-info";
    nameEl.className = "card-name";
    surnameEl.className = "card-surname";
    delBtnEl.className = "card-btn";

    idEl.textContent = items.indexOf(item) + 1;
    nameEl.textContent = item.nome.toUpperCase();
    surnameEl.textContent = item.cognome.toUpperCase();
    delBtnEl.textContent = "DELETE";

    infoEl.append(imgEl, nameEl, surnameEl);
    cardEl.append(idEl, infoEl, delBtnEl);
    containerActEl.appendChild(cardEl);

    // DELETE
    const DELETE = async (url, id) => {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ id: id }),
      });
      return await res.json();
    };
    // ON CLICK EVENT --> DELETE
    delBtnEl.addEventListener("click", (e) => {
      const url = "http://localhost:3000/attore";
      const id = item.id;
      DELETE(url, id).then(() => location.reload());
    });
  }
};

// FETCH URL
fetch(actorsUrl)
  .then((res) => res.json())
  .then((res) => createCardAct(res));

// POST
const POST = async (url, body_message) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
};

// FUNCTION CREATE ACTOR
function createActor(body_message) {
  const url = "http://localhost:3000/attore";
  return POST(url, body_message);
}

// EVENT ON CLICK --> ADD
addBtn.addEventListener("click", (e) => {
  const actor = {
    nome: actorName.value,
    cognome: actorSurname.value,
    data_nascita: actorYob.value,
  };

  createActor(actor).then((message) => {
    console.log("Post andata a buon fine!");
  });
});
