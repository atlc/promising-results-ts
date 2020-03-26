/**
 * SlowMath Library
 * Covalence, LLC
 */
var DELAY_TIME = 750;
var slowMath = (function () {
    var wait = function (delay) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, delay);
        });
    };
    function add(a, b) {
        return wait(DELAY_TIME)
            .then(function () {
            return negativeCheck(a, b);
        }).then(function (shouldResolve) {
            if (shouldResolve) {
                return Promise.resolve(+a + +b);
            }
            else {
                return Promise.reject(new Error("Error adding values " + a + " and " + b + "."));
            }
        });
    }
    function subtract(a, b) {
        return wait(DELAY_TIME)
            .then(function () {
            return negativeCheck(a, b);
        }).then(function (shouldResolve) {
            if (shouldResolve) {
                return Promise.resolve(a - b);
            }
            else {
                return Promise.reject(new Error("Error subtracting values " + a + " and " + b + "."));
            }
        });
    }
    function multiply(a, b) {
        return wait(DELAY_TIME)
            .then(function () {
            return negativeCheck(a, b);
        }).then(function (shouldResolve) {
            if (shouldResolve) {
                return Promise.resolve(a * b);
            }
            else {
                return Promise.reject(new Error("Error multiplying values " + a + " and " + b + "."));
            }
        });
    }
    function divide(a, b) {
        return wait(DELAY_TIME)
            .then(function () {
            return negativeCheck(a, b);
        }).then(function (shouldResolve) {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero.'));
            }
            else if (shouldResolve) {
                return Promise.resolve(a / b);
            }
            else {
                return Promise.reject(new Error("Error dividing " + a + " by " + b + "."));
            }
        });
    }
    function remainder(a, b) {
        return wait(DELAY_TIME)
            .then(function () {
            return negativeCheck(a, b);
        }).then(function (shouldResolve) {
            if (+b === 0) {
                return Promise.reject(new Error('Cannot divide by zero for remainder.'));
            }
            else if (shouldResolve) {
                return Promise.resolve(a % b);
            }
            else {
                return Promise.reject(new Error("Error dividing " + a + " by " + b + " for remainder."));
            }
        });
    }
    function negativeCheck(a, b) {
        return a > -1 && b > -1;
    }
    return { add: add, subtract: subtract, multiply: multiply, divide: divide, remainder: remainder };
})();
