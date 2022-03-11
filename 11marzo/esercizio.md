/*
ESERCIZI SULLO SCOPE ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!! Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'. */

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log? // RISPOSTA: 3.14 in entrambi i casi perchè const PI è dichiarato nel Global scope

const PI = 3.14;

console.log(PI);

if (PI >= 3) { console.log(PI); }

// Es. 2: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA: Il mio colore preferito è: violet - Ci sono 12 mesi in un anno.

var favColour = "violet"; let monthsInAYear = 12;

if (true) { var favColour = "violet"; console.log("Il mio colore preferito è:", favColour); }

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual'è il risultato dei console.log? // RISPOSTA: Errore perche la variabile theSecond è dichiarata con let all'intarno della funzione e non poò essere usata fuori

function makePizza(moreIngredients) { let theSecond = "Sugo di pomodoro freschissimo"; // { ... } console.log(theSecond + ", " + moreIngredients); return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) }

if (true) { makePizza("rucola, prosciutto crudo e scaglie di grana."); console.log("Il secondo ingrediente necessario: ", theSecond); }