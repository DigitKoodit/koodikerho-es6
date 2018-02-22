
////Sisältö////
// - Arrow functions
// - Template literals
// - Block (lexical) scope
// - Default + Rest + Spread
// - Classes
// - Currying
// - Promises
// - import/export


//ES5
var JavaScript = function (ES5) {
  return ES5 + ' is ok!'
}

//ES6
const JavaScript = ES6 => `${ES6} is awesome!`

/////////////////////////
/////Arrow functions/////

//ES5
var printValue = function (value) {
  console.log(value);
}
printValue(1);
// = 1

//ES6
const printValue = value => {
  console.log(value);
}
printValue(1);
// = 1

// Nuolifunktio ilman aaltosulkuja palauttaa arvon ilman return ilmaisua
var sumValues = function (a, b) {
  return a + b;
}

//ES6
const sumValues = (a, b) => a + b



/////////////////////////////
/////Template literals/////

// Stringien käsittelyä

var printWithDashSeparator = function (a, b, c, d) {
  console.log(a + '-' + b + '-' + c + '-' + d);
}
printWithDashSeparator(1, 2, 3, 4);
// = 1-2-3-4


//ES6
// Huomaa keno lainausmerkki ` eikä perinteinen '
let printWithDashSeparator = (a, b, c, d) => console.log(`${a}-${b}-${c}-${d}`);
printWithDashSeparator(1, 2, 3, 4);
// = 1-2-3-4



// Monirivinen
console.log('first line\n' +
  'second line');
// = first line
// = second line

//ES6
console.log(`first line
second line`)
// = first line
// = second line


///////////////////////////////////////////////
///// Block (lexical) scope + const + let /////
// Mahdollistaa block scopen JSssässä eli muuttujia ei voida käyttää ennen asettamista
// ja aaltosulkujen sisällä (block) voidaan määrittää samannimisiä muuttujia, kuin mitä ulkopuolella
// var -muuttuja voidaan määrittää uudestaan niin usein kuin halutaan
// let ja const estävät uudelleen määrittämisen.
/* Esimerkiksi tyypitetyissä kielissä tapaus:
  boolean arvo = true;
  int arvo = 3;
// Not cool
*/

var x = 1
var x = 2 // OK

let y = 1
let y = 2 // Identifier 'y' has already been declared

const z = 1
const z = 2 // Identifier 'z' has already been declared



// Lisää scopesta
let f = () => {
  var x = 11;
  {
    console.log("Sisällä ulkopuolinen muuttuja var", x)
    var x = 12;
    console.log("Sisällä uudelleen määrätty", x)
  }
  console.log("Ulompi", x);
}

f()

// Lexical scope. Funktio joka palauttaa funktion.
// Palautettu funktio printFunction() muistaa/näkee 'innerValue' -muuttujan vaikka funktiota kutsutaan alkuperäisen ulkopuolella.
let createPrintFunction = () => {
  let innerValue = 11;
  let printFunction = () => {
    console.log("inner function:", innerValue)
  }
  console.log("Inner ", innerValue);
  return printFunction
}

let printFunction = createPrintFunction();
printFunction()
// = Sisempi 12
// = Ulompi 11
console.log(innerValue)
// = Uncaught ReferenceError: x is not defined




//////////////////////////////////
///// default + spread + rest/////

// Default. Elikkäs funktion parametrin oletusarvo
//ES5
var addPrefix = function (value, prefix) {
  if (prefix && prefix.length > 0) {
    return prefix + '-' + value;
  } else {
    return 'pre-' + value;
  }
}

//ES6
let addPrefix = (value, prefix = 'pre') => `${prefix}-${value}`
let titeenit = 'titeenit';
let preTiteenit = addPrefix(titeenit);
console.log(preTiteenit);
// = pre-titeenit


// Spread. // Kopioi objekti tai taulu. Paljon eri käyttötarkoituksia
// https://davidwalsh.name/spread-operator
const a = { d: 1 }
const b = { e: 2 }
const c = { ...a, ...b }
console.log(c);
// = {d: 1, e: 2}

// Rest. Sama kuin Javan varags. Muuta funktiolle annetut parametrit tauluksi
let sum = (...values) => values.reduce((sum, value) => sum + value, 0)
let arraySum = sum(1, 2, 3, 4, 5);
console.log(arraySum)
// = 15

let user = { firstName: 'Timo', lastName: 'Teekkari', age: 20, major: 'TDI' }
let getFullName = ({ firstName, lastName, ...rest }) => {
  let fullName = `${firstName} ${lastName}`
  let fullNameUser = {
    fullName,
    ...rest
  }
  return fullNameUser;
}


// funktio olettaa saavansa parametrina objektin, jolla vähintään ominaisuudet fname ja lname
let getFullName = ({ fname, lname, ...rest }) => {
  console.log(`${fname} ${lname}`)
  console.log(rest)
}
let fullNameUser = getFullName(user);
console.log(user)
console.log(fullNameUser)


///////////////////
///// Classes /////
class Animal {
  constructor(name) {
    this.name = name;
  }
  move(meters) {
    console.log(`${this.name} moved  ${meters} meters`)
  }
}

class Horse extends Animal {
  move() {
    console.log('Gallopping...');
    super.move(45);
  }
}

const bob = new Horse('Bob');
bob.move();
// = Gallopping...'
// = Bob moved 45 meters

// React luokka//
import React, { Component } from 'react'

class Kuvakaruselli extends Component {
  state = {
    initialState = {}
  }

  componentDidMount() {

  }
}




////////////////////
/// Esimerkkejä/////

/// Kerro listan luvut kymmenellä ja printtaa taulu indekseineen
//ES5
var numbers = [1, 2, 3, 4, 5, 6]
var tenTimesLarger = []
// kerro kympillä
for (var i = 0; i < numbers.length; i++) {
  var num = numbers[i] * 10;
  tenTimesLarger.push(num);
}

// Print values
for (var i = 0; i < tenTimesLarger.length; i++) {
  console.log(i + ":" + tenTimesLarger[i]);
}


// ES6
var numbers = [1, 2, 3, 4, 5, 6]
numbers.map(num => num * 10).forEach((num, index) =>
  console.log(`${index}:${num}`)
)



// Currying https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400
// Alustetaan funktio jollakin/joillakin arvoilla ja palautetaan uusi funktio
// Näin samaa pohjaa voidaan käyttää luomaan uusia funktioita

const curry = first => second => console.log(first, second);
// Tämä on täsmälleen sama, kuin
const curry = function(first) {
  return function(second) {
    console.log(first, second)
  }
}

// funktio palauttaa vain uuden funktion, joka vaatii uuden parametrin. Konsoliin ei printata vielä mitään
const curryFirst = curry(10);
// kun uusi funktio ajetaan, printataan molemmat currytut (voi pojat mikä sana...) arvot
curryFirst('Second');



// Edellinen esimerkki: "We can do better"
const numbers = [1, 2, 3, 4, 5, 6]

// Jos funktiot yleistetään käyttämällä itämaista maustetta
const multiply = (multiplier, multiplicand) => multiplier * multiplicand;
const multiplyBy = multiplier => multiplicand => multiply(multiplier, multiplicand);
// täsmälleen sama asia:
const multiplyBy = function(multiplier) {
  return function(multiplicand) {
    return multiplier * multiplicand
  }
}

// Esimerkki jatkuu
// Luodaan uusi funktio, jossa kertoimena jo valmiina 10
const multiplyByTen = multiplyBy(10);

const log = value => console.log(value);
const printOrderAndValue = (value, index) => log(`Indeksi: ${index} Arvo: ${value}`);

numbers.map(multiplyByTen).forEach(printOrderAndValue);
/* = Indeksi: 0 Arvo: 10
     Indeksi: 1 Arvo: 20
     Indeksi: 2 Arvo: 30
     Indeksi: 3 Arvo: 40
     Indeksi: 4 Arvo: 50
     Indeksi: 5 Arvo: 60
*/



////////////////////
///// Promises /////
// Tapa eliminoida callbackit. Puhtaampi koodi -> parempi mieli

// Perinteinen callback -funktio
var traditionalDelay = function (callback) {
  setTimeout(callback, 1000, 'traditional timeout ended');
}

var printValue = function (value) {
  console.log(value);
}

traditionalDelay(printValue);

// Sama asia kuin uusi anonyymi funktio suoraan parametrina
traditionalDelay(function (value) {
  console.log(value);
});


// Vastaava promisella
var promiseDelay = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, 'timeout ended');
})

promiseDelay.then(function (result) {
  console.log("Promise result: " + result);
})
.catch(function (reason) {
    console.log("Promise failed" + reason);
})


//
let promise = new Promise((resolve, reject) => {
  console.log("Do something");
  getData().then(data => resolve(data))
})

promise.then(result => console.log('Promise finished', result))
.catch(reason => console.log("VIRHE", reason));






