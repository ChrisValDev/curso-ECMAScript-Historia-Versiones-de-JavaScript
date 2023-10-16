class user3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    #speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.#speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const pedro = new user3("pedrito", 30);
console.log(pedro.uAge);
console.log(pedro.uAge = 25);