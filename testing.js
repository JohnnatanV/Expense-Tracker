let expences = [];
let listExp = [];

function saveLocalExpences(item1, item2, item3, item4) {
  expences.push(item1);
  expences.push(item2);
  expences.push(item3);
  expences.push(item4);
  listExp.push(expences);
  console.log(listExp);
  console.log(JSON.stringify(listExp));
}

// saveLocalExpences("Angie", "02/03/2021", 20000, "Pan");
// saveLocalExpences("Johnn", "01/03/2021", 12000, "Mas Pan");

var a = 8;
var b = 5;
var c = 9;

var d = a < b;
var e = b > c;
var f = c + 3 > a;

var op1 = d && e;
var op2 = f && e;
var op3 = (d || f) && (!e || f);
// console.log("Op1: " + op1);
// console.log("Op2: " + op2);
// console.log("Op3: " + op3);

var a, b, c;
a = b = c = 5;

a += b *= c /= 5;

// console.log("a = " + a);
// console.log("b = " + b);
// console.log("c = " + c);

var entero1 = 11;
var entero2 = 2;
var num1 = 1.5;
var num2 = 5.0;

var suma = entero1 + entero2;
var multiplicacion = num1 * num2;
var division1 = entero1 / entero2;
var division2 = entero1 % entero2;
var division3 = num2 / entero2;

// console.log(suma);
// console.log(multiplicacion);
// console.log(division1);
// console.log(division2);
// console.log(division3);

expences = [];
listExp = ["Angie", "04-04-2021", 5000, "Pelota"];

expences.push(listExp);

console.log(expences);
