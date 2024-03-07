// const tinderUser= new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Shubham"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email: "shubham@123.com",
    fullname:{
        userfullname:{
            firstname:"shubham",
            lastname:"kaundal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1= {1:"a",2:"b"}
const obj2= {3:"c",4:"d"}
// const obj3 = Object.assign({},obj1,obj2) // Object.assign(target, source)
const obj3={...obj1,...obj2} //Spread Operation for merging two objects
// console.log(obj3);

const user= [
    {
        id:"Hi",
        name:"shubham"
    },
    {

    }
]

user[1].name;
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // return all the keys in an array
// console.log(Object.values(tinderUser)); // return all the values in an array
// console.log(Object.entries(tinderUser)); // return all key value pair in the form of seperate array for each entry

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
