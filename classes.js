const dog = {
  name: "Fiona",
  breed: "Corgi",
  age: 5,
  weightInLbs: 26,
  isGood: true,
};
// console.log(dog);
key = "age";
// object.property
// console.log(
//   `The dog's name is ${dog.name} and its breed is ${dog["breed"]} and they are ${dog[key]} years old.`
// );

// for (const key in dog) {
//   console.log(`${key} - ${dog[key]}`);
// }

// JS classes

// class names often start with a capital letter
class Pet {
  // constructor is a special method that creates new
  // objects & defines and initializes their properties
  constructor(name, species, age, numLegs, isMammal, sound) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.numLegs = numLegs;
    this.isMammal = isMammal;
    this.favToys = [];
    this.sound = sound;
    // this.intro = () => console.log("hello"); functions inside a class NEED the function keyword
    this.longerIntro = function () {
      console.log("hello there");
    };
    // 'this' refers to the specific object currently being used
  }

  speak() {
    console.log(this.sound);
  }
}

const chance = new Pet("Chance", "Bulldog", 5, 4, true, "WOOF");
const sassy = new Pet("Sassy", "Himalayan cat", 3, 4, true, "meow");
const shadow = new Pet("Shadow", "Retreiever", 7, 4, true, "woof");
console.log(chance);
console.log(sassy);
chance.speak();

const homewardBound = [
  new Pet("Chance", "Bulldog", 5, 4, true, "WOOF"),
  new Pet("Sassy", "Himalayan cat", 3, 4, true, "meow"),
  new Pet("Shadow", "Retreiever", 7, 4, true, "woof"),
];

homewardBound.forEach((element) => {
  console.log(`${element.name} is ${element.age} years old.`);
});

homewardBound.forEach((pet) => {
  pet.speak();
});

const chancePet = homewardBound.find((pet) => {
  return pet.name === "Chance";
});

if (chancePet) {
  chancePet.speak();
}
