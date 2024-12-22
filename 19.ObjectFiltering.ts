interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {name: "Laptop", price: 1500},
    {name: "Phone", price: 500},
    {name: "Tablet", price: 300},
    {name: "Headphones", price: 50},
    {name: "Monitor", price: 400},
];

function filterProducts(products: Product[], minPrice: number, maxPrice: number) : Product[] {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

const filteredProducts = filterProducts(products, 400, 1000);
console.log(filteredProducts);
