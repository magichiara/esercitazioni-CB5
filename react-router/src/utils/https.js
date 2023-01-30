const BASE_URL = "https://dummyjson.com";

const GET = async (resource, param = "") => {
  try {
    const res = await fetch(`${BASE_URL}/${resource}/${param}`);
    if (res.status >= 400) {
      throw new Error("Problem connecting to server");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    return { status: false };
  } finally {
    console.log("finally");
  }
};

export { GET };
