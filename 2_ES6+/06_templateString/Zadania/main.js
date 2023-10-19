//Zadanie 1

const sumTemplate = `Suma dwóch liczb ${2} i ${4} to: ${2+4}`;
console.log(sumTemplate);

//Zadanie 2

const whoAreYou = (obj) => {
    return (
`My name is ${obj.name} ${obj.lastName}.
I am ${new Date().getFullYear() - obj.yearOfBirth} years old.
My profession is ${obj.profession}.`
    )
}

const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

console.log(whoAreYou(person));