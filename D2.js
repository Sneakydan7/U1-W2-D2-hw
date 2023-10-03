/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 200;
const num2 = 100;

if (num1 > num2) {
console.log("Il primo numero è piu grande")
} else if (num1 < num2){
  console.log("Il secondo numero è piu grande")
} else  {
  console.log("I numeri sono uguali")
};

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 % 5 === 0) {
  console.log("Il numero è perfettamente divisibie per 5")
} else {
  console.log("Il numero non è perfettamente divisibile per 5")
};



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numFourthExercise1 = 8
let numFourthExercise2 = 18

if (numFourthExercise1 === 8 || numFourthExercise2 ===8 || numFourthExercise1 + numFourthExercise2 === 8 || numFourthExercise1 - numFourthExercise2 === 8){
  console.log(true)
} else{
  console.log(false)
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 60
let shippingCost = totalShoppingCart > 50 ? 0 : 10

console.log("Totale ordine:", totalShoppingCart + (shippingCost > 0 ? shippingCost :0) + "$")


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let discountedPrice = totalShoppingCart * .20;

let blkFridayPrice = totalShoppingCart - discountedPrice;

let blkFridayshippingCost = blkFridayPrice > 50 ? 0 : 10;

console.log("Totale ordine:", blkFridayPrice + (blkFridayshippingCost> 0 ? blkFridayshippingCost :0) + "$")

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const a = 10;
const b = 12;
const c = 15;

let biggerNumber;
let middleNumber;
let smallerNumber;

if (a > b && a > c) {
  biggerNumber = a;
  if (b > c) {
    middleNumber = b;
    smallerNumber = c;
  } else {
    middleNumber = c;
    smallerNumber = b;
  }
} else if (b > a && b > c) {
  biggerNumber = b;
  if (a > c) {
    middleNumber = a;
    smallerNumber = c;
  } else {
    middleNumber = c;
    smallerNumber = a;
  }
} else if (c > a && c > b) {
  biggerNumber = c;
  if (b > a) {
    middleNumber = b;
    smallerNumber = a;
  } else {
    middleNumber = a;
    smallerNumber = b;
  }
  console.log(biggerNumber, middleNumber, smallerNumber);
}
   
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let numEightExercise = 10

if (typeof numEightExercise === typeof 60) {
  console.log(true)
} else {
  console.log(false)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numNineExercise = 24;

if (numNineExercise % 2 === 0){
  console.log("Il numero è pari")
} else {
  console.log("Il numero è dispari");

}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
  if (val >= 10) {
      console.log("Uguale o maggiore a 10");
    } else if (val < 5) {
      console.log("Minore di 5");
    } else {
      console.log("Meno di 10");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
 me.city = "Toronto"
console.log(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop(2)
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arrays = [];

arrays.unshift(1,2,3,4,5,6,7,8,9,10)
console.log(arrays)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
arrays.pop()
arrays.push(100)
console.log(arrays)
/* SCRIVI QUI LA TUA RISPOSTA */
