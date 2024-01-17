class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return this.name+ " " + this.age
    }
}

class Teacher extends Person {
    salary;

    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    greet() {
        return "I am the teacher, " + super.greet();
    }
}

class Student extends Person { 
    group;

    constructor(name, age, group) {
        super(name, age,);
        this.group = group;
    }

}

const s1 = new Student("Tim", 10, "A");
const t1 = new Teacher("Sally", 30, "65000");

console.log(s1.greet());
console.log(t1.greet());