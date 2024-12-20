"use strict";
{ /*
Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// Sample Input 1:
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
78.54;

// Sample Input 2:
const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});

// Sample Output 2:
24;
*/
    ;
    ;
    // function isCircle(obj: Circle): obj is Circle {
    function isCircle(obj) {
        return obj.shape === "circle";
    }
    // function isRectangle(obj: Rectangle): obj is Rectangle {
    function isRectangle(obj) {
        return obj.shape === "rectangle";
    }
    // function calculateShapeArea(obj: Circle | Rectangle):number {
    function calculateShapeArea(obj) {
        if (isCircle(obj)) {
            const area = Number((Math.PI * obj.radius ** 2).toFixed(2));
            return area;
        }
        else if (isRectangle(obj)) {
            return obj.width * obj.height;
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
