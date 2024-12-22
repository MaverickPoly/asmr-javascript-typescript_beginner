interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

type Optional<T> = {
    [P in keyof T]?: T[P];
};

type OptionalUser = Optional<User>;

const user1: OptionalUser = {};
const user2: OptionalUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    age: 30,
};

console.log(user1);
console.log(user2);
console.log(user1.age);
console.log(user2.age);
