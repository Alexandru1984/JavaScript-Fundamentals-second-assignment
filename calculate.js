let numberOne = prompt("First Number: ");
let operator = prompt("Chose operation (+ - * /): ");
let numberTwo = prompt("Second Number: ");


function TypingError(op1, op2, operation) {

  if (isNaN(numberOne) || numberOne.length == 0 || isNaN(numberTwo) || numberTwo.length == 0) {
    return -1;
    //Deci aici se precizeaza ca daca, unul dintr-e cele 2 campuri(cu valori) nu este de tip number ci string return = -1
    //Ori numarul unu sau numarul doi trebuie sa aiba lungimea de tip text == 0
    //Nu inteleg ce rol are (return = -1). Este pt. a fii apelata mai jos in conditia if??
  }

  if (operation !== undefined && operation.length > 1) {
    return -2;
    /*
    
    Aici se precizeaza ca: daca operatorul este diferit de valoarea undefined (adica daca se adauga o/un character 
     in plus) si marimea caharacterelor din camp esete mai mare ca 1, atunci trebuie returnat = -2;
     Este pt. a fii apelata in conditia else if ???
    */
  }
  return 0;
}


let TypingErrorDisplay = TypingError(numberOne, numberTwo, operator);

if (TypingErrorDisplay == -1) {
  alert("one of the operands is not numeric ");
}
else if (TypingErrorDisplay == -2) {
  alert("wrong operation - symbol must have one character");
}
else {
  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);
  if (operator == "+") {

    var calc = numberOne + numberTwo;
    alert(calc);
  }

  else if (operator == "-") {
    var calc = numberOne - numberTwo;
    alert(calc);

  }

  else if (operator == "*") {
    var calc = numberOne * numberTwo;
    alert(calc);
  }

  else if (operator === "/") {
    if (numberTwo == 0) {
      alert("Division by 0 is not allowed");
    }
    else {
      var calc = numberOne / numberTwo;;
      alert(calc);
    }
  }
  else {
    alert("operation " + operator + " not exists");
  }
}




