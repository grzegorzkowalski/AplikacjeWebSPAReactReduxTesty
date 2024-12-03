// Zadanie 1

const [snow,,sun] = [ "snow", "rain", "sun" ];
console.log(snow, sun);



// Zadanie 2

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart, ...reszta} = slider;
console.log(type, autoStart, reszta);

//  Zadanie 3

const [name1, name2, name3] = ["Grzegorz", "Marcin", "Bonawentura"];
console.log(name1, name2, name3);

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