// index.test.js
const sayHello = require('./index');

describe('sayHello', () => {
    test('should return greeting message for a given name', () => {
        const result = sayHello('SonarQube');
        expect(result).toBe('Helasdalo, SonarQube!');
    });

    test('should return greeting message for an empty name', () => {
        const result = sayHello('');
        expect(result).toBe('Helasdalo, !');
    });
});
