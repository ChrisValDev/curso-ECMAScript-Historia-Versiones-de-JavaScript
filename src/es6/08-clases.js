class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const chris = new user();
console.log(chris. greeting());

// constructor

class user1 {
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return 'Hello';
    }
}

const david = new user1();

// this (hace referencia al elemento padre que lo contiene)

class user2 {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const juan = new user2('Juan');
console.log(juan.greeting());

// getters y setters

class user3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const pedro = new user3("pedrito", 30);
console.log(pedro.uAge);
console.log(pedro.uAge = 25);