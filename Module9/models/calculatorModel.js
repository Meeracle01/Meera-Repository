

const performOperation = (num1, num2, operator) => {
    switch (operator) {
        case 'Add':
            return num1 + num2;
        case 'Subtract':
            return num1 - num2;
        case 'Multiply':
            return num1 * num2;
        case 'Divide':
            if (num2 === 0) {
                throw new Error('Division by zero is not allowed');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }
};

module.exports = {
    performOperation
};
