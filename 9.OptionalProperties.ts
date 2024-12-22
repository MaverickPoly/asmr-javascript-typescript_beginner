type Car = {
    readonly make: string;
    readonly model: string;
    year?: number;
    color: string;
}

const myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2025,
    color: "Orange",
}

console.log(myCar);
console.log(typeof myCar);
console.log(myCar.year);
console.log(myCar.color);

// myCar.model = "BMW";  //! Not allowed
myCar.color = "Red";  // Allowed
console.log(myCar.color)
