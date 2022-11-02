//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let name = "Person3's"
console.log(name + ' favorite pizza is ' + person3['pizza'])
console.log(name + ' favorite tacos are ' + person3.tacos)
console.log(name + ' favorite burgers are ' + person3['burgers'])
console.log(name + ' favorite ice creams are ' + person3.ice_cream)
console.log(name + ' favorite shakes are ' + person3['shakes']['oberwise'][0])
console.log(name + ' favorite shakes are ' + person3['shakes']['dunkin'][0])
console.log(name + ' favorite shakes are ' + person3['shakes']['culvers'][0])
console.log(name + ' favorite shakes are ' + person3['shakes']['mcDonalds'][0])
console.log(name + ' favorite shakes are ' + person3['shakes']['cupids_candies'][0]);




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age) {
       this.name = name;
       this.age = age;
       this.printInfo = () => {
        console.log(`This is a ${this.age} years old person named ${this.name}`);
    };
}
       addAge = (ages) => {
       this.age += 1;
       console.log(`This is their new age: ${this.age}`);
    };
}
let p1 = new Person("Ana", 20);
p1.printInfo();
p1.addAge();
let p2 = new Person("Juan", 30);
p2.printInfo()
p2.addAge();
p2.addAge();
p2.addAge();




  // =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let lengthOfString = (string) => {
    return new Promise((resolve, reject)=>{
        if (len(string) > 10){
            resolve(string);
        }else {
            reject(string);
        }
    })
}

lengthOfString("Hello World!")
.then(  (result)  =>  {
    console.log(`Big word ${result}.`);
}).catch(  (result)  => {
    console.log(`Small Number ${result}.`);
});


lengthOfString("Hiya")
.then(  (result)  =>  {
    console.log(`Big word ${result}.`);
}).catch(  (result)  => {
    console.log(`Small Number ${result}.`);
});



// Codewars JS Problems

// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2) {
      return "Odd";
    }else {
      return "Even";
    }
  }



// String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    let str = '';
    for (let i = 0; i < n; i++) {
      str += s;
    }
    return str;
  }