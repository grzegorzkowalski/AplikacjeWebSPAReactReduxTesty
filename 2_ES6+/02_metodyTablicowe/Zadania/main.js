function distFromAverage(tab) {
    const sum = tab.reduce((total, cur) => total+cur, 0);
    console.log(sum);
    const avg = sum/tab.length;
    console.log(avg);
    const result = tab.map(el => Math.abs(el - avg));
    console.log(result);
    return result;
}
const distFromAverage2 = (tab) => tab.map(el => Math.abs(el - tab.reduce((total, cur) => total+cur, 0)/tab.length));

console.log(distFromAverage2([1,2,3,4,5,6,7])) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
console.log(distFromAverage2([1,1,1,1])) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
console.log(distFromAverage2([2,8,3,7])) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)