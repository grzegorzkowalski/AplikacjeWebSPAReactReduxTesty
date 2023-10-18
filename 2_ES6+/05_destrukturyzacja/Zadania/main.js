//Zadanie 5

const cat = {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
};

const showAnimal = ({name, age: catAge, getVoice}) => {
    console.log(`Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`);
}

showAnimal(cat);