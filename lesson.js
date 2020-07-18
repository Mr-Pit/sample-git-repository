//Create a new array of manufacturers who's name contain the letter `B`

let cars = ["Saab", "Volvo", "BMW", "Toyota", "Bentley"];
let carswithb = [];

//DO THE MAGIC THEN ADD 1
for (i = 0; i < cars.length; i++) {

  //THE MAGIC 
  if (cars[i].includes("b") || cars[i].includes("B")) {
    carswithb.push(cars[i])
  }

}

console.log(carswithb);
