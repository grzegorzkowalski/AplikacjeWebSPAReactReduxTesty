//Zadanie 1

const distFromAverage = (tab) => {
    const avg = tab.reduce((prev, cur) => prev + cur, 0)/tab.length;
    return tab.map(el => Math.abs(el - avg));
}


console.log(distFromAverage([1,2,3,4,5,6,7]), [3,2,1,0,1,2,3]); // => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage([1,1,1,1]), [0,0,0,0]); // => [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage([2,8,3,7]), [3,3,2,2]); // => [3,3,2,2] (średnia z tablicy wejściowej to 5)