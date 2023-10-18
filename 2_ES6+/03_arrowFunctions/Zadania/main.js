//Zadanie 2

const runInterval = (n = 8) => {
    let i = 0;
    const intervalID = setInterval(() => {
        if (i < n) {
            console.log("Hello");
            i++;
        }
        else {
            clearInterval(intervalID);
        }
    }, 500);
}

runInterval();
