// Zadanie 1

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol"];

console.log(namesB);


// ## Zadanie 2
//
//
//
//
// Stwórz funkcję o nazwie ```getAverage```, która może przyjąć dowolną liczbę parametrów (w postaci liczb)
// i która zwraca średnią arytmetyczną tych liczb.
//
// Przykład wywołania:
//
// ```js
// getAverage(2, 4, 5, 6, 7, 79);
// ```

const getAverage = (...ileWlezie) => ileWlezie.reduce((total, cur) => total + cur)/ileWlezie.length;

console.log(getAverage(1,2,3));
console.log(getAverage(2, 4, 5, 6, 7, 79));

// Zadanie 3

console.log([..."Grzegorz"]);

// Zadanie 4

const fruits = ["🍌", "🍏"];
const vegetables = ["🍅", "🥒"];
const mix = [...fruits, ...vegetables];
console.log(mix);
const fruit2 = [...fruits];
console.log(fruit2 === fruits);

//## Zadanie 5
//
//
//
// ```
// const state = {
//   invoiceSection: false,
//   availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
//   formStatus: "failed",
//   isUserLogged: false
// };
// ```
// Twoim zadaniem jest stworzenie **kopii** obiektu `state` w zmiennej `stateCopy` wraz ze zmianą dwóch właściwości:
//
// - `availableYears` - powinno teraz zawierać tylko lata do `1999` włącznie (użyj odpowiedniej metody tablicowej)
// - `isUserLogged` - powinno mieć wartość `true`
//
// Na koniec sprawdź w konsoli czy obiekt `state` pozostał bez zmian.

const state = {
  invoiceSection: false,
  availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
  formStatus: "failed",
  isUserLogged: false
};


const stateCopy = {
    ...state,
    availableYears: state.availableYears.filter(el => el <= 1999),
    isUserLogged: !state.isUserLogged
}

console.log(stateCopy);