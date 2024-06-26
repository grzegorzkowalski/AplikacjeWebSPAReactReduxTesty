//Zadanie 1
const weather = [ "snow", "rain", "sun" ];
const [snow, ,sun] = weather;
console.log(snow, sun);

// const snow2 = weather[0]; //po staremu
// const sun = weather[2]; //po staremu

//Zadanie 2

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart} = slider;
console.log(type, autoStart);

// const type = slider.type; //po staremu
// const autoStart = slider.autoStart; //po staremu

//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({name, age: catAge, getVoice}) => {
    return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`
}

console.log(showAnimal(cat));