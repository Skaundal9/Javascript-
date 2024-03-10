function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// sayMyName()
// function addTwoNumbers(num1,num2){ //here in function defination these are called Parameters
//     console.log(num1+num2)
// }
function addTwoNumbers(num1,num2){ //here in function defination these are called Parameters
    // let result= num1+num2;
    // return result
    return num1+num2
}
const result= addTwoNumbers(2,6)  //these are arguments
// console.log(result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shubham"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){ // (...) is rest operator in this function
    return num1
}
// console.log(calculateCartPrice(200,300,400,2000));

const user={
    username: "Shubham",
    price: 100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

// handleObject({
//     username:"shubham",
//     price:399
// })

const myNewArray=[100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));