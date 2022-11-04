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
