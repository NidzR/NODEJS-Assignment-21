// Q21.They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let user = {
    fName:"Rizwan",
    Lname:"Akhtar",
    age:40
    hobbies:["study", "paintings", "long drive"],
    salary: () => 30000,


}

user.email="abc@abc.com",
user.adress="1234 block 2",

// // delete user.salary
// // delete user.email
// delete user.adress

 console.log("email" in user)
console.log("adress" in user)
console.log(user)
 console.log(user.salary())