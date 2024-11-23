***3.Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Uses Type guards in TypeScript:
-------------------------------
Type Guards in TypeScript are features that allow developers to narrow the type of a variable within conditional blocks. They enhance type safety by checking variable types using typeof, instanceof, or custom type guard functions, ensuring accurate type inference and preventing runtime errors.

Type Guards provide a way to ensure type safety at runtime, thereby preventing potential errors.

There are several types of type guards which are described as follows:

1.Using typeof Type Guards:
The typeof operator in TypeScript can be used to check the type of a variable using the typeof operator. When used in a conditional statement, it acts as a Type Guard by narrowing down the type of the variable.

example:
function greet(name: string | number) {
    if (typeof name === 'string') {
        console.log(`Hello, ${name.toUpperCase()}!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}

greet('John');
greet(42);


2.Using instanceof Type Guards:
The instanceof operator checks if an object is an instance of a particular class or constructor function. It can be used as a Type Guard to narrow down the type of an object.

example:
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


3.Creating Custom Type Guards:
Custom Type Guards are user-defined functions that return a boolean value based on some condition. These functions can be used to check complex conditions and narrow down the type of a variable.

example:
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