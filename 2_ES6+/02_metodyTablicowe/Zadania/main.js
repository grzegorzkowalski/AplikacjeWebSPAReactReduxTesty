//Zadanie 1

const distFromAverage = (tab) => {
    const len = tab.length;
    const sum = tab.reduce((prev, cur) => prev + cur, 0);
    const avg = sum/len;
    return tab.map(el => Math.abs(el - avg));
}

console.log(distFromAverage([1,2,3,4,5,6,7]), "=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)");
console.log(distFromAverage([1,1,1,1]), "=> [0,0,0,0] (średnia z tablicy wejściowej to 1)");
console.log(distFromAverage([2,8,3,7]), "=> [3,3,2,2] (średnia z tablicy wejściowej to 5)");


//Zadanie 2

function multiply(arr) {
    return arr.reduce((total, cur) => total * cur, 1);
}

console.log(multiply([1,2,3,4,5,6,7]), "=> 5040");
console.log(multiply([1,1,1,1]), "=> 1");
console.log(multiply([2,8,3,7]), "=> 336");