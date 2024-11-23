***1.The significance of union and intersection types in Typescript.
Union Type:
----------
A union type in TypeScript allows a variable to have one of several types. It is represented using the | operator.
Example: type Vehicle = "Car" | "Bus" | "Truck";
In this example, a variable of type Vehicle can have the value "Car" , "Bus" , "Truck".


//Union type example
type Result = number | string;

function processResult(result: Result) {
  if (typeof result === "number") {
    console.log(`marks is ${result}`)
  } else if (typeof result === "string") {
    console.log(`grade is ${result}`)
  }
}

processResult(90); 
processResult("A+"); 


Intersection Type:
-----------------
An intersection type combines multiple types into a single type, representing the combination of all types. It is represented using the & operator.
Example: type Person = { name: string } & { age: number };
In this example, a variable of type Person must have both a name property of type string and an age property of type number.

// Intersection type example
type Person = {
  name: string;
  age: number;
};

type Employee = {
  company: string;
  position: string;
};

type EmployeePerson = Person & Employee;

const employee1: EmployeePerson = {
  name: "John Doe",
  age: 30,
  company: "ABC Corp",
  position: "Software Engineer",
};

console.log(employee1)

