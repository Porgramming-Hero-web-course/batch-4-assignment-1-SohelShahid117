{//example typeof
function greet(name: string | number) {
    if (typeof name === 'string') {
        console.log(`Hello, ${name.toUpperCase()}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet('John');
greet(42);


//example instanceof
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }
}

class Cat extends Animal {
    color: string;
    constructor(name: string, color: string) {
        super(name);
        this.color = color;
    }
}

function displayInfo(animal: Dog | Cat) {
    console.log(animal instanceof Dog)
    if (animal instanceof Dog) {
        console.log(
            `This is a dog named ${animal.name},
                    breed: ${animal.breed}`
        );
    } else {
        console.log(
            `This is a cat named ${animal.name},
                    color: ${animal.color}`
        );
    }
}

const dog = new Dog('Buddy', 'Labrador');
const cat = new Cat('Whiskers', 'Gray');

displayInfo(dog);
displayInfo(cat);


//custom type guard example
interface Car {
    make: string;
    model: string;
}

interface Truck {
    make: string;
    capacity: number;
}

function isCar(vehicle: Car | Truck): vehicle is Car {
    return 'model' in vehicle;
}

function displayVehicleInfo(vehicle: Car | Truck) {
    if (isCar(vehicle)) {
        console.log(
            `This is a car made by ${vehicle.make},
                 model: ${vehicle.model}`);
    } else {
        console.log(
            `This is a truck made by ${vehicle.make},
                  capacity: ${vehicle.capacity}`
        );
    }
}

const car: Car = {
    make: 'Toyota',
    model: 'Corolla'
};
const truck: Truck = {
    make: 'Ford',
    capacity: 1000
};

displayVehicleInfo(car);
displayVehicleInfo(truck);


}