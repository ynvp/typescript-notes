// CAN BE USED AS USER DEFINED DATA TYPE
export interface User {
    name: string;
    age?: number;
    // id becomes optional by putting ? before type
    id: number;
    email: string;
}

// OBJECT DESTRUCTURING
let { name: username, email: userLogin }: User = {
    name: "Pradeep",
    id: 1,
    email: "ynvp@gmail.com",
};

// user.name;
// user.email;
console.log(username, userLogin);

interface Employees extends User {
    salary: number;
}
let employee: Employees = {
    name: "Yen",
    id: 2,
    email: "ynvp@gmail",
    salary: 10000,
};

// To use Login interface in different file
// we can mark them with export keyword

export interface Login {
    login(): User;
}

// ARRAY DESTRUCTURING SYNTAX
let [user1, user2, ...restUsers]: Array<User> = [
    {
        name: "John",
        email: "john@gmail.com",
        id: 2,
    },
    {
        name: "John2",
        email: "john2@gmail.com",
        id: 3,
    },
    {
        name: "John3",
        email: "john3@gmail.com",
        id: 4,
    },
    {
        name: "John3",
        email: "john3@gmail.com",
        id: 5,
    },
];
console.log(user1, user2);
console.log(restUsers); // rest params type thing

let result = restUsers.filter((user) => user.id > 4);
console.log(result);
