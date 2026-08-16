const { add, greet } = require('./app');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('greets the world correctly', () => {
    expect(greet('World')).toBe('Hello, World!');
});

test('adds negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
});