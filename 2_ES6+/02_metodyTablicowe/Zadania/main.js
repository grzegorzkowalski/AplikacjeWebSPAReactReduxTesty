function distFromAverage(tab) {
 const avg = tab.reduce(function(curr, next) {return curr + next;})/tab.length;
 const calculatedTab = tab.map(function (el) {
     return Math.abs(el-avg);
 });
 console.table(tab);
 console.table(calculatedTab);
 return calculatedTab;
}

distFromAverage([1,2,3,4,5,6,7]) //=> [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) //=> [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) //=> [3,3,2,2] (średnia z tablicy wejściowej to 5)
