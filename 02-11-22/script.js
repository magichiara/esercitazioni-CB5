import books from "./books.js";
console.log(books);

// NAVBAR
const bodySection = document.querySelector("body");
const navbarSection = document.createElement("div");
navbarSection.className = "navbar-section";
bodySection.appendChild(navbarSection);

const navbarLogo = document.createElement("img");
navbarLogo.className = "navbar-logo";
navbarLogo.setAttribute(
  "src",
  "https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"
);
navbarLogo.setAttribute("alt", "logo-image");
navbarSection.appendChild(navbarLogo);

const navbarText = document.createElement("h2");
navbarText.className = "navbar-text";
navbarText.textContent = "BOOKSTORE";
navbarSection.appendChild(navbarText);

// HERO
const heroSection = document.createElement("div");
heroSection.className = "hero-section";
bodySection.appendChild(heroSection);

const heroText = document.createElement("h1");
heroText.className = "hero-text";
heroText.textContent = "Non c’è nessun amico più leale di un libro";
heroSection.appendChild(heroText);

const heroImage = document.createElement("img");
heroImage.className = "hero-image";
heroImage.setAttribute(
  "src",
  "https://www.incimages.com/uploaded_files/image/1920x1080/getty_689785084_20001333200092804_356816.jpg"
);
heroImage.setAttribute("alt", "hero image");
heroSection.appendChild(heroImage);

// GALLERY
const gallerySection = document.createElement("div");
gallerySection.className = "gallery-section";
bodySection.appendChild(gallerySection);

// FOOTER

const footerSection = document.createElement("div");
footerSection.className = "footer-section";
bodySection.appendChild(footerSection);

const footerLogo = document.createElement("img");
footerLogo.className = "footer-logo";
footerLogo.setAttribute(
  "src",
  "https://i.pinimg.com/originals/5f/fb/de/5ffbdeceb84323decd76084b2efca958.png"
);
footerLogo.setAttribute("alt", "logo-image");
footerSection.appendChild(footerLogo);

const footerTextContainer = document.createElement("div");
footerTextContainer.className = "footer-text--container";
footerSection.appendChild(footerTextContainer);

const footerShopText = document.createElement("h3");
footerShopText.textContent = "SHOP";
footerTextContainer.appendChild(footerShopText);

const footerMagazineText = document.createElement("h3");
footerMagazineText.textContent = "MAGAZINE";
footerTextContainer.appendChild(footerMagazineText);

const footerCommunityText = document.createElement("h3");
footerCommunityText.textContent = "COMMUNITY";
footerTextContainer.appendChild(footerCommunityText);
