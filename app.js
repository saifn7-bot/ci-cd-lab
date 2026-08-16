function add(a, b) {
    return a + b;
}

function greet(name) {
    return `Hello, ${name}!`;
}

module.exports = { add, greet };

console.log(greet("World"));
console.log(add(2, 3));