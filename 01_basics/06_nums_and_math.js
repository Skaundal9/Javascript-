const score =400
//console.log(score);
//Specifically defines the variables as an Number
const balance = new Number(100)
//console.log(balance);
//toString- Converts the number into string, length- returns the number of elements in the variables
//console.log(balance.toString().length);
// console.log(balance);
//Fixed- return the decimal points 
// console.log(balance.toFixed(1));
//toPrecision- round of the value according to the (1,2,3,....n)
const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(4));
//toLocaleString- increase the readibility of the number by adding commas(,)
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++ Maths +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // returns only positive value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9))
// console.log(Math.min(4,5,6,7));
// console.log(Math.max(7,6,9,4));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min) //Understand again
