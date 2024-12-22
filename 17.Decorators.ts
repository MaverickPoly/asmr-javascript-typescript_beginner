function MyDecorator(target: any, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value; // saving the original method

    // redefine the method with more functionality
    descriptor.value = function (...args: any[]) {
        console.log(`Method called: ${propertyName}`);
        console.log(`Arguments: ${args}`);

        // calling the original method
        const result = originalMethod.apply(this, args);

        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor; // we should return the modified descriptor at the end
}


class Calculator {
    @MyDecorator
    add(a: number, b: number): number {
        return a + b;
    }

    @MyDecorator
    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calculator = new Calculator();
calculator.add(5, 3);
calculator.subtract(4, 7);
