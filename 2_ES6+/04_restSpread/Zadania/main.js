// Zadanie 1

const namesA = ["Zosia", "Marcin", "Kamil"];
const namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol"];
//console.log(namesB);

//Zadanie 2

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};

const stateCopy = {
    ...state,
    isUserLogged: !state.isUserLogged,
    availableYears: state.availableYears.filter(el => el < 2000)
}

console.log(stateCopy);