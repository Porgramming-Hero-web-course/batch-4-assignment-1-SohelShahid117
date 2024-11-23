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