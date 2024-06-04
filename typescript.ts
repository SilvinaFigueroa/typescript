

// JS Variables:  let message = "Hello, world!";

let message: string = "Hello, world!";


console.log(message)

//  JS Functions: function add(a, b) {
//     return a + b;
// }

function add(a: number, b: number): number {
    return a + b;
}

// JS Objects :const user = {
//     name: "John",
//     age: 30
// };

interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "John",
    age: 30
};

// JS Arrays 
// const numbers = [1, 2, 3, 4];

const numbers: number[] = [1, 2, 3, 4];

// JS Classes

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise.`);
//     }
// }

// const dog = new Animal("Dog");
// dog.speak(); // Dog makes a noise.

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.

// Generics

function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString"); // Output: "myString"
let output2 = identity<number>(100); // Output: 100
