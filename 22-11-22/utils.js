const ce = (el) => document.createElement(el)
const qs = (el) => document.querySelector(el)

const GET = async (BASE_URL) => {
    const res = await fetch(BASE_URL);
    return await res.json();
  };

export { ce, qs, GET }