//singleton
//Object.create (Constructor method)

//object literal
const mySym=Symbol("key1");
// if you want to use symbol as a key in the object then you must use [] for declaring key or it will be stored as a string rahter than Symbol

const JsUser={
    "full name":"shubham kumar",
    [mySym]: "key1",
    name: "Shubham",
    age: 18,
    location: "Delhi",
    email: "shubham@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);

JsUser.email= "shubham@microsoft.com"
// Object.freeze(JsUser);
JsUser.email="shubham@chatgpt.com";
// console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello JS User")
}
JsUser.greetingtwo= function(){
    console.log(`Hello JS User,${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
