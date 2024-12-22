type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
}

type PersonEmployee = Person & Employee;

const personEmployee: PersonEmployee = {
    name: 'John Doe',
    age: 30,
    employeeId: 12345,
    department: "Engineering"
}

console.log(personEmployee);
console.log(typeof personEmployee);
console.log(personEmployee.department);
