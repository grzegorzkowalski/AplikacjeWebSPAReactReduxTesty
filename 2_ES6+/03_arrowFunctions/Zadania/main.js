//Zadanie 1

const getSecondMaxNumber = (arr) => {
    if (arr && arr.length >= 2) {
        const arr2 = [...arr];
        arr2.sort((a,b) => a - b);
        return arr2[arr2.length - 2];
    } else {
        return false;
    }
};

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
//Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku

console.log(getSecondMaxNumber(null));
console.log(getSecondMaxNumber([1]));

console.log(arr1);


//Zadanie 2

const runInterval = (n = 8) => {
    let i = 0;
    const intervalID = setInterval(() => {
        if (n > i) {
            console.log("Hello");
            i++;
        } else {
            clearInterval(intervalID);
        }
    }, 500);
};

runInterval(undefined);

//Zadanie 3

const links = ["google", "twitter", "facebook"];

const generateLinks = (tab) => {
    return tab.map(el => "https://" + el + ".com");
}

const generateLinks2 = (tab) => {
    return tab.map(el => `https://${el}.com`);
}

console.log(generateLinks(links));
console.log(generateLinks2(links));
