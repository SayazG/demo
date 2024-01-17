// classes and objects

class Person {
    name;
    age;

    sayHi(shouldSayBye) {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
        if (shouldSayBye) {
            console.log("bye")
        }
    }
}


const person = new Person();
const person2 = new Person();
person.sayHi(false);
person2.sayHi(true);