# TypeScript ASMR: Beginner Concepts

Welcome to **TypeScript ASMR: Beginner Concepts**! This repository is designed to help beginners explore the fundamentals of TypeScript through 20 hands-on projects and exercises. Each exercise focuses on a specific concept, which is very helpful for those programmers that are new to TypeScript.

---

`## Table of Contents

### Beginner Exercises
1. **Basic Types and Variables**
2. **Array and Tuple Types**
3. **Type Aliases**
4. **Enum Types**`
5. **Function Type Signatures**
6. **Object Types**
7. **Union Types**
8. **Intersection Types**
9. **Optional Properties**
10. **Type Assertions**

### Intermediate Exercises
11. **Type Inference**
12. **Generic Functions**
13. **Generics in Interfaces**
14. **Mapped Types**
15. **Class Implementation**
16. **Abstract Classes**
17. **Decorator Functions**
18. **Type Guards**
19. **Array of Objects Filtering**
20. **Overloaded Functions**

---

## Beginner Exercises

### 1. Basic Types and Variables
- Create variables using different basic types: `string`, `number`, `boolean`, `null`, and `undefined`.
- Write examples for each type and check type assignments.

### 2. Array and Tuple Types
- Create an array of numbers and a tuple with multiple types (e.g., `string` and `number`).
- Practice using array methods and accessing tuple elements.

### 3. Type Aliases
- Define a custom type alias for a `Person` with properties such as `name` (string), `age` (number), and `isActive` (boolean).
- Use this type to create an object.

### 4. Enum Types
- Create an enum for different roles (`Admin`, `User`, `Guest`).
- Assign roles to variables and demonstrate usage with a switch statement.

### 5. Function Type Signatures
- Write a function that takes two arguments (numbers) and returns their sum.
- Define types for parameters and return values.

### 6. Object Types
- Define an object type for a `Book` with properties like `title`, `author`, and `pageCount`.
- Create a book object based on this type.

### 7. Union Types
- Create a function that accepts either a `string` or a `number` as input and returns a `string`.
- Handle both cases correctly.

### 8. Intersection Types
- Create an intersection type combining `Person` and `Employee` with properties from both types.
- Use this combined type in an object.

### 9. Optional Properties
- Define a `Car` type with properties like `make` (string), `model` (string), and `year` (optional).
- Create an object that includes both mandatory and optional properties.

### 10. Type Assertions
- Practice type assertions by specifying that a value is of a specific type using both `as` and angle-bracket (`< >`) syntax.

---

## Intermediate Exercises

### 11. Type Inference
- Write a function for which TypeScript automatically infers the return type based on the return value.
- Demonstrate how TypeScript infers types.

### 12. Generic Functions
- Create a generic function `identity<T>` that returns the same value passed to it, preserving its type.
- Test it with different types (e.g., `number`, `string`).

### 13. Generics in Interfaces
- Define a generic interface for a `Container` that can hold any type of value.
- Implement the interface with different types of data.

### 14. Mapped Types
- Create a mapped type that makes all properties of a given type optional.
- Apply this mapped type to a `User` interface.

### 15. Class Implementation
- Write a class `Person` that has properties like `name` and `age`, and includes a method `greet()`.
- Create instances of the class and call the method.

### 16. Abstract Classes
- Create an abstract class `Shape` with an abstract method `area()`.
- Implement the class in derived classes `Rectangle` and `Circle` and compute their areas.

### 17. Decorator Functions
- Implement a simple decorator function to log method calls and their arguments.
- Apply the decorator to a class method.

### 18. Type Guards
- Write a function that checks whether an argument is a `string` or `number` and implements a type guard to return different outputs based on the type.

### 19. Array of Objects Filtering
- Define a `Product` interface with properties like `name` and `price`.
- Create an array of products and write a function that filters products based on a price range.

### 20. Overloaded Functions
- Create an overloaded function `concat` that accepts either two strings or two arrays of strings and returns a combined result.
- Define function signatures for both cases.

---

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/).
- Set up a TypeScript environment by running:
  ```bash
  npm install -g typescript
  tsc --v
  tsc --init
  ```

### Running the Exercises
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/typescript-asmr-beginnerConcepts.git
   ```
2. Navigate to the project directory:
   ```bash
   cd typescript-asmr-beginnerConcepts
   ```
3. Run each exercise individually:
   ```bash
   tsc 1.Variables.ts && node exercise1.js
   ```

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for improvements, additional exercises, or bug fixes.



