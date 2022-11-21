// ESERCITAZIONE 17-11-22

import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;

  // const elements = {
  //   cardEl: ce("div"),
  //   imgEl: ce("img"),
  //   titleEl: ce("h4"),
  //   urlEl: ce("p")
  // }
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

let productsList = [];

GET(BASE_URL).then((data) => {
  productsList = data.filter((product) => product.id <= 10);
  productsList.map((product) => createCardEl(product, cardList));
});

// Soluzione
inputEl.addEventListener("input", (e) => {
  const searchString = e.target.value;
  cardList.replaceChildren();
  productsList
    .filter((product) => product?.title.includes(searchString))
    .map((product) => createCardEl(product, cardList));
});
