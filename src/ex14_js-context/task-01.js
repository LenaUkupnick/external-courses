var Calculator = {
    multiply: function multiply(x) {
        if (x !== undefined) {
            this.result *= x;
        }
        return this;
    },
    divide: function divide(x) {
        if (x !== undefined) {
            this.result /= x;
        }
        return this;
    },
    subtract: function subtract(x) {
        if (x !== undefined) {
            this.result -= x;
        }
        return this;
    },
    add: function add(x) {
        if (x !== undefined) {
            this.result += x;
        }
        return this;
    },
    getResult: function () {
        return this.result;
    },
    reset: function () {
        this.result = 0;
        return this;
    },
    setState: function (x) {
        if (x !== undefined) {
            this.result = x;
        }
        return this;
    },
    fetchData: function (callback) {
        this.result = 500;
        callback(this.getResult());
        return this;
    }
};
module.exports = Calculator; 
