"use strict";
// /*
// Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// // Sample Output 1:
// 78.54;
// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// // Sample Output 2:
// 24;
// */
// type Circle={
//   shape:string;
//   radius:number
// }
// type Rectangle={
//   shape:string;
//   width:number;
//   height:number
// }
// type type3 = Circle | Rectangle
// // function calculateShapeArea(obj:Circle | Rectangle):number{
// function calculateShapeArea(obj:type3):number{
// // //   // console.log(type obj=="Circle");
// // //   console.log(keyof obj)
// // //   // console.log(type obj);
// // //   // console.log(type3)
//   if(obj.shape=="circle"){
// // //   // if(obj:Circle){
// // //   // if(typeof obj == Circle){
//     const area = Math.PI*obj.radius*obj.radius;
// // //     // return area;
//     return Number(area.toFixed(2));
//   }
//   else if(obj.shape=="rectangle"){
//     const area = obj.width * obj.height;
//     return area;
//   }
// }
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// console.log(circleArea)
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log(rectangleArea);
