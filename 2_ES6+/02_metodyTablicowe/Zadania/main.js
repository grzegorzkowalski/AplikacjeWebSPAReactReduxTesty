const distFromAverage = (arr) => {
    const avg = arr.reduce((prev, cur) => prev + cur)/arr.length;
    return arr.map((el) => Math.abs(el - avg));
}

//const distFromAverage2 = (arr) => arr.map((el) => Math.abs(el - arr.reduce((prev, cur) => prev + cur)/arr.length));

console.log(distFromAverage([1,2,3,4,5,6,7])) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage([1,1,1,1])) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage([2,8,3,7])) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)

//Zadanie 3

const getEvenAverage = (arr) => {
    const evenTab = arr.filter(el => el % 2 === 0);
    if (!evenTab.length) {
        return null;
    }
    return evenTab.reduce((prev, cur) => prev + cur)/evenTab.length;
}

console.log(getEvenAverage([1,2,3,4,5,6,7]), 4) //=> 4
console.log(getEvenAverage([1,1,1,1]), null) //=> null
console.log(getEvenAverage([2,8,3,7,4]), 4.666) // => 4.666