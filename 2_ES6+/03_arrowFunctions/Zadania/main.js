const getSecondMaxNumber = (tab) => {
    tab.sort((a,b) => a-b);
    console.log(tab);
    return tab[tab.length-2];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
//Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku
