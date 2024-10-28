// app.test.js
// import supertest and the express app
const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {
    // generate some random numbers to test the calculator
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);
    test('GET /Calculate/Add => sum of numbers', () => {
        return request(app)
            .get(`/Calculate/Add?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).toEqual({
                    res: (number1 + number2)

                });
            });
    });
});

describe('Calculator Routes', () => {
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    test('GET /Calculate/Multiply => Multiplication of numbers', () => {
        return request(app)
            .get(`/Calculate/Multiply?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                console.log(`Multiplying ${number1} * ${number2} = ${response.body.res}`);  // For debugging
                expect(response.body).toEqual({
                    res: number1 * number2
                });
            });
    });
});

describe('Calculator Routes', () => {
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    test('GET /Calculate/Divide => Division of numbers', () => {
        return request(app)
            .get(`/Calculate/Divide?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                console.log(`Multiplying ${number1} * ${number2} = ${response.body.res}`);  
                expect(response.body).toEqual({
                    res: number1 / number2
                });
            });
    });
});


describe('Calculator Routes', () => {
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    test('GET /Calculate/Subtract => Subtraction of numbers', () => {
        return request(app)
            .get(`/Calculate/Subtract?num1=${number1}&num2=${number2}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                console.log(`Multiplying ${number1} * ${number2} = ${response.body.res}`);  
                expect(response.body).toEqual({
                    res: number1 - number2
                });
            });
    });
});