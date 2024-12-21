class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    person_info() {
        console.log(`Hi, my name is ${this.name}, my age is ${this.age}, and I live in ${this.address}.`);
    }
}
var people = new Person('Mohammed', 21, 'Aydon');
people.person_info();
