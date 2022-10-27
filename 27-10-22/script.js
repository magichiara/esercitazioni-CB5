// ESERCIZIO 1 - Ricreare la calcolatrice sfruttando le funzioni

alert("Ciao! Qui puoi eseguire operazioni matematiche. Premi OK per iniziare."); // Alert

// Variabili
let operation = prompt(
  "Inserisci l'operazione che vuoi eseguire: \n<+> addizione\n<-> sottrazione\n<*> moltiplicazione\n</> divisione"
);
let firstNum = prompt("Scegli il primo numero");
let firstNumParsed = parseInt(firstNum);
let secondNum = prompt("Scegli il secondo numero");
let secondNumParsed = parseInt(secondNum);

// Funzione
function calculator(firstNumParsed, secondNumParsed, operation) {
  switch (operation) {
    case "+":
      return firstNumParsed + secondNumParsed;
    case "-":
      return firstNumParsed - secondNumParsed;
    case "*":
      return firstNumParsed * secondNumParsed;
    case "/":
      return firstNumParsed / secondNumParsed;
  }
}

let result = calculator(firstNumParsed, secondNumParsed, operation); // Istruzioni
alert("Il risultato della tua operazione è: " + result);

// ESERCIZIO 2 - Oggetto "character" con metodo + metodi e proprietà

const myDog = {
  name: "pina",
  age: 8,
  dogBreed: "labrador",
  isFemale: true,
  owners: ["chiara", "marianna"],
  marks: {
    first: "very hungry",
    second: "chunky",
    third: "lovely",
  },
  kiss: function () {
    console.log("SLURP");
  },
  poop: function () {
    console.log("PLOP");
  },
};

// Test metodi e proprietà degli objects
console.log(myDog);
console.log(myDog.dogBreed);
console.log(myDog.owners[0]);

const myDogKeys = Object.keys(myDog);
console.log(myDogKeys);

const myDogValues = Object.values(myDog);
console.log(myDogValues);

myDog.color = "yellow";
console.log(myDog);

delete myDog.age;
console.log(myDog);

// ESERCIZIO AVANZATO - Modificare l'esercizio 1 in modo che la quantità di argomenti passabili (numeri) siano più di due e ritornare quindi il risultato dell'operazione considerandoli tutti quanti

/* function secondCalculator(numbers, secondOperation) {
  switch (secondOperation) {
    case "+":
      let sumResult = 0;
      for (num of numbers) {
        sumResult = sumResult + num;
      }
      console.log(sumResult);
      break;
    case "-":
      let subResult = 0;
      for (num of numbers) {
        subResult = subResult - num;
      }
      console.log(subResult);
      break;
    case "*":
      let multipleResult = 1;
      for (num of numbers) {
        multipleResult = multipleResult * num;
      }
      console.log(multipleResult);
      break;
    case "/":
      let divResult = 0;
      for (num of numbers) {
        divResult = divResult * num;
      }
      console.log(divResult);
      break;
  }
}

secondCalculator([1, 2, 3, 4], "*"); */

// Per risolvere l'esercizio devo usare un normale ciclo for.

// ESERCIZIO AVANZATO - Modifiche

function secondCalculator(numbers, secondOperation) {
  let secondResult = numbers[0];
  switch (secondOperation) {
    case "+":
      for (i = 1; i < numbers.length; i++) {
        secondResult += numbers[i];
      }
      break;
    case "-":
      for (i = 1; i < numbers.length; i++) {
        secondResult -= numbers[i];
      }
      break;
    case "*":
      for (i = 1; i < numbers.length; i++) {
        secondResult *= numbers[i];
      }
      break;
    case "/":
      for (i = 1; i < numbers.length; i++) {
        secondResult /= numbers[i];
      }
      break;
  }
  return secondResult;
}

console.log(secondCalculator([10, 2, 2, 4], "-"));
