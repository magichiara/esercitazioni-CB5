// ARRAY DATI PERSONALi

let infoArr = ["chiara", "maggio", 30, "laurea magistrale"];

// MANIPOLAZIONE ARRAY

// 1 ----- Rimozione età
infoArr.splice(2, 1);
console.log(infoArr);

// 2 ----- Sostituzione età -> data di nascita
infoArr.splice(2, 0, "24-05-1992");
console.log(infoArr);

// 1 + 2 ----- Rimozione età + Inserimento data di nascita (unico splice)

infoArr.splice(2, 1, "24-05-1992");
console.log(infoArr);

// 3 ----- Nome e Cognome maiuscoli

infoArr[0] = infoArr[0].toUpperCase();
infoArr[1] = infoArr[1].toUpperCase();
console.log(infoArr);

// AVANZATO - Creazione di un triangolo rettangolo capovolto di 7 righe di "#"

let hash = "#######";
for (let i = 7; i >= 1; i--) {
  hash = hash.slice(0, i);
  console.log(hash);
}
