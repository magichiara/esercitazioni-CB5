// Primo alert

alert("Ciao! Qui puoi eseguire operazioni matematiche. Premi OK per iniziare.");

// Variabili

let Operation = prompt(
  "Inserisci l'operazione che vuoi eseguire, attraverso il numero corrispondente:\n1=addizione\n2=sottrazione\n3=moltiplicazione\n4=divisione\n5=modulo"
);
let OperationParsed = parseInt(Operation);
let firstNum = prompt("Scegli il primo numero");
let firstNumParsed = parseInt(firstNum);
let secondNum = prompt("Scegli il secondo numero");
let secondNumParsed = parseInt(secondNum);
let Result;

// Switch

switch (OperationParsed) {
  case 1:
    Result = firstNum + secondNum;
    break;
  case 2:
    Result = firstNum - secondNum;
    break;
  case 3:
    Result = firstNum * secondNum;
    break;
  case 4:
    Result = firstNum / secondNum;
    break;
  case 5:
    Result = firstNum % secondNum;
    break;
  default:
    alert("L'operazione che hai inserito non è valida");
    console.log("L'operazione non può essere eseguita");
}

// Istruzioni

alert("Il risultato della tua operazione è " + Result);
console.log(Result);
