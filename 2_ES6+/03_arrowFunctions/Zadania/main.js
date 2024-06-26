const runInterval = (n = 8) => {
    let counter = 0;
    const id = setInterval(() => {
        if (counter < n) {
            console.log("Hello");
            counter++;
        }
        else {
            clearInterval(id);
        }
    }, 500);
}

runInterval();