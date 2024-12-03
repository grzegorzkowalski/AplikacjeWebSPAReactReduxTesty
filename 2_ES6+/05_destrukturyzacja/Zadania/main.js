// Zadanie 4

const generateRandomNumbers = () => {
    const tab = [];
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 6; i++) {
        tab.push(getRandomInt(0,5))
    }
    const [pierwsza,,trzecia] = tab;
    console.log(pierwsza, trzecia);
}

generateRandomNumbers();

// Zadanie 5

const cat = {
  name: "Mruczek",
  age: 10,
  getVoice: () => "miau miau"
};

const showAnimal = (obj) => {
    const catAge = obj.age;
    return `Kot ${obj.name} ma ${catAge} lat i robi ${obj.getVoice()}.`;
};

console.log(showAnimal(cat));

const showAnimal2 = ({name, getVoice, age: catAge}) => {
    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`;
};

console.log(showAnimal2(cat));