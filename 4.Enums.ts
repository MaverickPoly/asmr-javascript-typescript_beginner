// Enums
enum Directions {
    North,
    East,
    South,
    West
}

let currentDirection = Directions.North;
// currentDirection = "North";  //! Warning
console.log(currentDirection)  // -> 0
console.log(typeof currentDirection);


// Numeric Enums
enum NumberDirections {
    North = 1,
    East = 2,
    South = 3,
    West = 4
}

console.log(NumberDirections.North);
console.log(NumberDirections.East);
console.log(NumberDirections);
console.log(typeof NumberDirections);


// Fully implemented enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    BadRequest = 400,
    Accepted = 202,
}

console.log(StatusCodes);
console.log(typeof StatusCodes);
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
console.log(typeof StatusCodes.Success);

// String enums
enum StrDirections {
    North = "North",
    South = "South",
    West = "West",
    East = "East",
}

console.log(StrDirections.East);
console.log(StrDirections.North);
console.log(typeof StrDirections.South);
console.log(StrDirections);
console.log(typeof StrDirections);
