/*
Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

// Sample Input 1:
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();

// Sample Output 1:
6 (assuming current year is 2024)
*/

class Car{
    // properties make, model, and year
    make:string
    model:string
    year:number
    constructor( make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year
    }
    getCarAge(){
        const presentDate = new Date;
        const presentYear = presentDate.getFullYear();
        const yearDifference = presentYear-this.year;
        // console.log(yearDifference)
        // console.log(`${yearDifference} (assuming current year is ${presentYear})`)
        console.log(`${yearDifference} (assuming current year is ${this.year+yearDifference})`)
        // console.log(`assuming current year is 2024`)
    }
}
const car = new Car("Honda", "Civic", 2018);
car.getCarAge();