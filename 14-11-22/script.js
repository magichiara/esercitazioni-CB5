/* ------------- ESERCIZIO 14-11-22 ------------- */
let index = 1;

let result = `https://jsonplaceholder.typicode.com/posts/${index}`;

fetch(result)
  .then((res) => res.json())
  .then((data) => createPost(data));

const bodyEl = document.querySelector("body");
const postBoxEl = document.querySelector(".post-box");
const postIdEl = document.querySelector(".post-id");
const postTitleEl = document.querySelector(".post-title");
const postBodyEl = document.querySelector(".post-body");
const prevBtnEl = document.querySelector(".post-btn__prev");
const nextBtnEl = document.querySelector(".post-btn__next");

// CREAZIONE POST
const createPost = (data) => {
  postIdEl.textContent = `#${data.id}`;
  postTitleEl.textContent = data.title;
  postBodyEl.textContent = `"${data.body}"`;
};

nextBtnEl.addEventListener("click", () => {
  index++;
  if (index >= 10) nextBtnEl.disabled = true;
  if (index === 1) prevBtnEl.disabled = true;
  else prevBtnEl.disabled = false;
  result = `https://jsonplaceholder.typicode.com/posts/${index}`;
  fetch(result)
    .then((res) => res.json())
    .then((data) => createPost(data));
});

prevBtnEl.addEventListener("click", () => {
  if (index <= 2) {
    prevBtnEl.disabled = true;
    nextBtnEl.disabled = false;
  }
  index--;
  result = `https://jsonplaceholder.typicode.com/posts/${index}`;
  fetch(result)
    .then((res) => res.json())
    .then((data) => createPost(data));
});

window.onload = prevBtnEl.disabled = true;
