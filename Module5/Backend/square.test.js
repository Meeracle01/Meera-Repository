const { square, add, appender } = require("./square")

test('square of 5 is 25', () => {
    expect(square(5)).toBe(25);
});

test('addition of 4 and 3', () => {

    expect(add(4, 3)).toBe(7)
})
test('test to append Meera with IOD', () => {
    expect(appender('Meera')).toMatch("MeeraIOD")
})
