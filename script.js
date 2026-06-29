// ============================================================
// VisCarMa Test Script – full of errors
// ============================================================

// 1. Undefined variables (ReferenceError)
function calculateTotal() {
    return price + tax; // price and tax are not defined
}

// 2. Promise without .catch() (unhandled rejection)
function fetchData() {
    return fetch('https://api.example.com/data')
        .then(response => response.json());
    // Missing .catch() – will crash on network error
}

// 3. Async/await without try-catch
async function loadUser() {
    const user = await fetch('/user').then(r => r.json());
    console.log(user);
    // If fetch fails, unhandled rejection
}

// 4. DOM query without null check (TypeError)
function updateHeader() {
    const header = document.querySelector('.missing-header');
    header.textContent = 'Updated'; // .missing-header doesn't exist => TypeError
}

// 5. Excessive console.error (anti-pattern)
function logError(msg) {
    console.error('Something went wrong:', msg);
    console.error('Retrying...');
    console.error('Failed again.');
}

// 6. Missing semicolon (style issue)
var a = 5
var b = 10

// 7. Using == instead of === (type coercion)
function checkValue(val) {
    if (val == '42') {
        return true;
    }
    return false;
}

// 8. eval() usage (security risk)
function runCode(code) {
    eval(code);
}

// 9. Unused variable (warn)
let unused = 'I am never used';

// 10. Console.log in production (warn)
console.log('Debug message');

// 11. Alert (annoying)
alert('This is a test');

// 12. Debugger statement
debugger;

// 13. Promise executor return (error)
new Promise((resolve, reject) => {
    return resolve('ok');
});

// 14. Await in loop (performance)
async function processItems(items) {
    for (const item of items) {
        await processItem(item);
    }
}

// 15. Missing require-await
async function noAwait() {
    return 42;
}