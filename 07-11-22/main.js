// ESERCIZIO 07-11-22 --- FETCH E PROMISE

/* -------------- 01. USERS (-> NAME, ADDRESS, CITY) --------------*/
// 1/3 - forEach()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resUsers) => resUsers.json())
  .then((users) =>
    users.forEach((info) =>
      console.log(info.name, info.address, info.address.city)
    )
  )
  .catch((err) => console.log("Error: " + err))
  .finally((final) =>
    console.log("------------------------ GOT IT! ------------------------")
  );

// 2/3 - map()
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resUsers) => resUsers.json())
  .then((users) =>
    users.map((info) => console.log(info.name, info.address, info.address.city))
  )
  .catch((err) => console.log("Error: " + err))
  .finally((final) =>
    console.log("------------------------ GOT IT! ------------------------")
  );

// 3/3 - mapping an array
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resUsers) => resUsers.json())
  .then((users) => {
    const usersArray = users.map((info) => {
      return {
        name: info.name,
        address: info.address,
        city: info.address.city,
      };
    });
    console.log(usersArray);
  });

/* ----------------------------------------------------------------------------------- */

/* -------------- 02. TODOS (-> ID, TITLE) -------------- */
// 1/3 - forEach()
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resTodos) => resTodos.json())
  .then((todos) => todos.forEach((data) => console.log(data.id, data.title)))
  .catch((err) => console.log("error:" + err))
  .finally((final) =>
    console.log("------------------------ GOT IT! ------------------------")
  );

// 2/3 - map()
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resTodos) => resTodos.json())
  .then((todos) => todos.map((data) => console.log(data.id, data.title)))
  .catch((err) => console.log("error:" + err))
  .finally((final) =>
    console.log("------------------------ GOT IT! ------------------------")
  );

// 3/3 - mapping an array
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resTodos) => resTodos.json())
  .then((todos) => {
    const todosArray = todos.map((data) => {
      return {
        id: data.id,
        title: data.title,
      };
    });
    console.log(todosArray);
  });
