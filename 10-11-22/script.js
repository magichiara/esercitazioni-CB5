/* ----- ESERCITAZIONE 10-11-22 ----- */

// INIZIALIZZAZIONE
const advIndexEl = document.querySelector(".adv-index");
const advTextEl = document.querySelector(".adv-text");
const advBtnEl = document.querySelector(".adv-btn");
const urlAdv = "https://api.adviceslip.com/advice";

// FETCH - END-POINT
/**
 * Get data from the end point
 *
 * @param {string} url
 */
const getAdv = (URL) => {
  fetch(URL, { cache: "no-cache" })
    .then((res) => res.json())
    .then((res) => {
      (advTextEl.innerHTML = `"` + res.slip.advice + `"`)(
        (advIndexEl.textContent = "ADVICE # " + res.slip.id)
      );
    })
    .catch((err) => console.log("Error:" + err));
};

// FUNCTION - ADDEVENTLISTENER
const onFirstLoad = () => {
  advBtnEl.addEventListener("click", () => {
    getAdv(urlAdv);
  });
  getAdv(urlAdv);
};
window.onload = onFirstLoad;
