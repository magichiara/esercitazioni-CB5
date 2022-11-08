import projects from "./projects.js";
console.log(projects);

const bodySection = document.querySelector("body");
const sectionProjects = document.querySelector("#projects");
const sectionProjectsTitle = document.querySelector(".projects-section__title");
const projectsGallery = document.querySelector(".projects-gallery");

const brandCategory = document.querySelector(".brand-design");
const uxuiCategory = document.querySelector(".uxui-design");
const packCategory = document.querySelector(".packaging-design");
const layoutCategory = document.querySelector(".layout-design");

const createCard = (title, category, imgUrl, appendTo) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const titleEl = document.createElement("h4");
  titleEl.className = "card-title";
  titleEl.textContent = title;

  const CategoryEl = document.createElement("div");
  CategoryEl.textContent = category;

  const imageEl = document.createElement("img");
  imageEl.setAttribute("src", imgUrl);
  imageEl.setAttribute("alt", category);

  cardEl.append(titleEl, imageEl);
  appendTo.appendChild(cardEl);
};

// Filtro le card per categoria - Brand Design
projects
  .filter((project) => project.category === "Brand Design")
  .map((project) => {
    createCard(project.title, project.category, project.image, brandCategory);
  });

// Filtro le card per categoria - UX/UI Design
projects
  .filter((project) => project.category === "UX/UI Design")
  .map((project) => {
    createCard(project.title, project.category, project.image, uxuiCategory);
  });

// Filtro le card per categoria - Packaging Design
projects
  .filter((project) => project.category === "Packaging Design")
  .map((project) => {
    createCard(project.title, project.category, project.image, packCategory);
  });

// Filtro le card per categoria - Layout Design
projects
  .filter((project) => project.category === "Layout Design")
  .map((project) => {
    createCard(project.title, project.category, project.image, layoutCategory);
  });

// ----------------------------------------

const $qs = (el) => document.querySelector(el);

const heroPic = $qs(".hero-img__pic2");
const showPic = () => (heroPic.style = "opacity: 1; transition: linear 1s;");
const timeoutShowPic = setTimeout(showPic, 1000);

const heroRect = $qs(".hero-img__rect2");
const showRect = () =>
  (heroRect.style =
    "opacity: 1; transition: linear 1s; transform: translateY(100px);");
const timeoutShowRect = setTimeout(showRect, 1400);

const heroCircle = $qs(".hero-img__circle2");
const showCircle = () =>
  (heroCircle.style =
    "opacity: 1; transition: linear 1s; transform: translate(300px, -350px);");
const timeoutShowCircle = setTimeout(showCircle, 1500);

const heroTitle = $qs(".hero-text__title2");
const showTitle = () =>
  (heroTitle.style = "opacity: 1; transition: linear 1s;");
const timeoutShowTitle = setTimeout(showTitle, 1800);

const heroPar = $qs(".hero-text__par2");
const showPar = () => (heroPar.style = "opacity: 1; transition: linear 1s;");
const timeoutShowPar = setTimeout(showPar, 2700);

const heroDescr = $qs(".hero-text__descr");
const showDescr = () =>
  (heroDescr.style = "opacity: 1; transition: linear 1s;");
const timeoutShowDescr = setTimeout(showDescr, 3000);

let modalBtnEl = $qs(".open-modal");
const showModalBtn = () =>
  (modalBtnEl.style = "opacity: 1; transition: linear 1s;");
const timeoutShowModalBtn = setTimeout(showModalBtn, 3500);

const modalEl = $qs(".modal");

modalBtnEl.addEventListener("click", () => {
  modalEl.style = "opacity: 1; z-index: 1;";
});

const closeModalBtnEl = $qs(".close-modal");
closeModalBtnEl.addEventListener("click", () => {
  modalEl.style = "opacity: 0;";
});
