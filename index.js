// index.js
const sayHello = (name) => {
    return `Hello, ${name}!`;
};

// Export the function so it can be imported in tests
module.exports = sayHello;

// Optional: You can leave the console.log for manual testing, but it's not needed for coverage
console.log(sayHello("SonarQube"));
