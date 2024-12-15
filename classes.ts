import { Login, User } from "./interface";
// import * as UserLogin from "./interface";

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    // USE ! TO SUPPRESS ERROR FOR initialization before constructor
    // id!: number
    // #{field_name} represents that field is private and cannot be accessed, can also use "private" keyword.
    #id: number;

    protected name: string;

    address: Address;

    // SETTERS AND GETTERS LIKE IN JAVA
    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    // CONSTRUCTORS for assigning initial values to created instances
    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): User {
        return { name: "Pradeep", id: 1, email: "ynvp@gmail.com" };
    }
    // constructor() {} Multiple constructors are not allowed

    // can be called with class name no obj needed
    static getEmployeeCount(): number {
        return 50;
    }
    getNameWithAddress(): string {
        // STRING LITERAL REP. USE BACK TICKS
        return `${this.name} ${this.address}`;
    }
}

let pradeep: Employee = new Employee(2, "Yendluri", {
    street: "nagar",
    city: "guntur",
    state: "andhra",
    pin: "11111",
});
console.log(pradeep.empId); // implicitly calls getter
pradeep.empId = 100; // implicitly calls setter method.
console.log(pradeep.empId); // implicitly calls getter

console.log(pradeep.getNameWithAddress());

// INHERITANCE
class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    // Overriding
    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let yendluri: Manager = new Manager(3, "Yendluri Manager Acc", {
    street: "nagar",
    city: "guntur",
    state: "andhra",
    pin: "11111",
});
// console.log(yendluri.name); CANNOT ACCESS DUE TO PROTECTED NATURE AND IS ONLY ACCESSIBLE IN EMPLOYEE CLASS

console.log(yendluri.getNameWithAddress());

console.log(Employee.getEmployeeCount());
